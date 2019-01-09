const Temp = require('../models/temperature')

async function list() {
    try{
        const datas = await Temp.find({ }).lean().exec()
        return datas
    } catch(e) {
        throw e
    }
}

function add(data) {
    const timeData = {
        ...data,
        updatedDate: new Date()
    }

}

function edit(teamID) {

}

function deleteId(teamID) {

} 

module.exports = {
    list,
    add,
    edit,
    deleteId
}