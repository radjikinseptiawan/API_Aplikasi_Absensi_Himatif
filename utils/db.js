import { createClient } from "@supabase/supabase-js"


export class DataDrive{
    #supabaseUrl = process.env.SUPABASE_URL
    #supabaseKey = process.env.SUPABASE_API_KEY

    connect(){
      try{
        const supabase = createClient(this.#supabaseUrl,this.#supabaseKey)

        if(supabase){
            console.log("Berhasil terhubung ke database")
        }

        return supabase
      }catch(e){
        console.error(e)
      }
    }
}



