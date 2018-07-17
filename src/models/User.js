/**
 * Created by pegdwende on 7/15/2018.
 */

import mongoose from "mongoose";

// TODo: add uniqueness and email validations to email field
const schema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        lowercase: true,
        index: true
    },
    passwordHash: {
        type: String
    }
});
export default mongoose.model("User",schema);