sap.ui.define(["sap/ui/core/mvc/Controller", "sap/tnt/NavigationListItem", "sap/ui/core/UIComponent"], function (Controller, NavigationListItem, UIComponent){
    "use strict";

    return Controller.extend("booksample.controller.LandingPage", {
        onInit(){
            this._loadGenres();
        },

        /**
         *  Allows sidebar to be opened when the button is clicked */
        onMenuPress(){
            const oSideNav = this.byId("sideNav"),
                bVisible = oSideNav.getVisible();

            oSideNav.setVisible(!bVisible);
        },

        /**Navigate to the SignUp page */
        onAccountPress(){
            const router = UIComponent.getRouterFor(this);
            router.navTo("signUp");
        },

        /**
         * Load genres from the catalog services "ListOfGenres" and calls _buildGenreNav to build sidenav genres section.
         */
        async _loadGenres(){
            try {
                const oModel = this.getOwnerComponent().getModel();
                const oBinding = oModel.bindList("/ListOfGenres");
                const aContexts = await oBinding.requestContexts();
                const aGenres = aContexts.map(function(oContext){
                    return oContext.getObject();
                });
                
                this._buildGenreNav(aGenres);
            } catch (error) {
                console.log("Failed to load the genres:", error);
            }
        },

        /**
         * Builds the nav genres section using an array of genres with parent and children genres.
         * @param {*} aGenres 
         */
        _buildGenreNav(aGenres){
            const oNavList = this.byId("genreNavList");
            oNavList.removeAllItems();

            //Parent to children lookup
            const oChildrenMap = {}; 

            aGenres.forEach(function(oGenre){
                const sParentId = oGenre.parent_ID;

                if(!sParentId) return;

                if(!oChildrenMap[sParentId]) oChildrenMap[sParentId] = [];

                oChildrenMap[sParentId].push(oGenre);
            });

            //recursively create NavigationListItem
            const createGenreItem= function(oGenre){
                const oItem = new NavigationListItem({
                    text: oGenre.name,
                    icon: oGenre.icon,

                    //pressing of icons will be implemented inside here with press: ... .bind(this)
                });

                const aChildren = oChildrenMap[oGenre.ID] || [];

                aChildren.forEach(function(oChild){
                    const oChildItem = createGenreItem.call(this, oChild);

                    oItem.addItem(oChildItem);
                }.bind(this));

                return oItem;
            }.bind(this);

            //add only root genres
            const aRootGenres = aGenres.filter(function (oGenre){
                return !oGenre.parent_ID;
            });

            aRootGenres.forEach(function (oGenre){
                oNavList.addItem(createGenreItem(oGenre));
            }.bind(this));
        }
    });
});