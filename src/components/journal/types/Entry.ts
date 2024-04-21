import Emoji from './Emoji';

export default interface Entry {
  id: number;
  body: string;
  createdAt: Date;
  emoji: Emoji | null;
  userId: number;
}
