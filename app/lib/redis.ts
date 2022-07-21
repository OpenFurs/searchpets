import {Client, Entity, Schema, Repository} from 'redis-om';

const client = new Client();

async function connect(){
    if(!client.isOpen()){
        await client.open("REDIS_URL")
    }
}

class Comic extends Entity{}
let schema = new Schema(
    Comic,
    {
        title: {type: 'string'},
        comic_link: {type: 'string'},
        characters: {type: 'string[]'},
        image: {type: 'string'},
        index: {type: 'number', sortable: true},
    }
)

export async function searchComics(years: string[], characters: string[]) {
    await connect()
    // for every year index given, search that year index that have the characters given
    let comics = []
    years.forEach(async year => {
        try{
            let repo = new (Repository as any)(client, schema)
            let results = await repo.search({
                index: year,
                characters: {$in: characters}
            })
            comics = comics.concat(results)
        }
        catch(e){
            console.log(e)
        }
    })
    return {"comics": comics}
}