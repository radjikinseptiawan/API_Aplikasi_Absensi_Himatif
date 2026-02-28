const {DataDrive} = require("../utils/db")
require("dotenv").config();
class MemberOrganization{
    constructor(memberName, position){
        this.memberName = memberName;
        this.position = position
    }
}


class DriveMemberDb extends MemberOrganization{
    constructor(){
        super()
        const drive = new DataDrive()
        this.db = drive.connect() 
    }
    
    getAll = async (req,res)=>{
        try{
        const { data, error } = await this.db.from("anggota").select("*")

        if(error){
            res.json({
                message:"Error Mengambil Data",
                detail:error
            })
        }

        return res.json({
            message:"Success to get data",
            data
        })
    }catch(e){
        return res.json({
            message:"Error Dalam Kode",
            detail:e.message
        })
    }
    }
}

module.exports = new DriveMemberDb()