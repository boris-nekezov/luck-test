import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from './user.schema';

export type LuckTestDocument = LuckTest & Document;

@Schema()
export class LuckTest {
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop([Boolean])
  etolon: boolean[];

  @Prop([Boolean])
  answers: boolean[];

  @Prop()
  dateOfCreation: string;
}

export const LuckTestSchema = SchemaFactory.createForClass(LuckTest);
