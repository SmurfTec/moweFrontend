import mongoose, { Schema, Model, Document } from "mongoose";

// Define the event document interface
interface IEvent extends Document {
  title: string;
  description: string;
}

const eventSchema = new Schema(
  {
    title: String,
    description: String,
  },
  { timestamps: true }
);

// Use Mongoose's set() method to prevent model redefinition
const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", eventSchema);

export default Event;
