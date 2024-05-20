import db from "../models/index"
import CRUDService from "../services/CRUDService";
const getHomePage = async (req, res) => {
    try {

        let data = await db.User.findAll();
        return res.render('homePage.ejs', {
            data: JSON.stringify(data)
        })

    } catch (e) {
        console.error(e)
    }
}

const getCRUD = async (req, res) => {
    return res.render("crud.ejs")

}
const postCRUD = async (req, res) => {
    const message = await CRUDService.createNewUser(req.body)
    console.log(message)
    return res.send("Hello everyone from postCRUD")
}

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCRUD: postCRUD,
}