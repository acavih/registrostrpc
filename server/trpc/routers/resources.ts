import { Resource } from "@/models/resources";
import { publicProcedure, router } from "../trpc";

export const resourcesRouter = router({
    allResources: publicProcedure.query(async () => {
        const list = await Resource.find({})
        console.log(list)
        return list
    })
})