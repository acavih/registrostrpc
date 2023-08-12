import { defineMongooseModel } from "#nuxt/mongoose";

export const Resource = defineMongooseModel({
    name: 'resources',
    schema: {
        type: { type: String, required: true },
        name: { type: String, default: '' },
        archived: { type: Boolean, default: false }
    }
})