import cds from '@sap/cds'

export class AdminService extends cds.ApplicationService { init() {
  this.before (['NEW', 'CREATE'], 'Authors', genid)
  this.before (['NEW', 'CREATE'], 'Books', genid)
  
  return super.init()
}}

// sample gen (will be updated later as is not safe)
async function genid (req) {
  if(req.data.ID) return
  const {id} = await SELECT.one.from(req.target).columns('max(ID) as id')
  req.data.ID = id + 4
}