import { Currency, Rating } from '@/interfaces/books.interface';
import { IsBoolean, IsEnum, IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  public type: string;
  @IsString()
  public authors: string[];
  @IsString()
  public publisher: string;
  @IsNumber()
  public numberOfCopies: number;
  @IsBoolean()
  public isVirtual: boolean;
  @IsString()
  public edition: string;
  @IsNumber()
  public price: number;
  @IsEnum(Currency)
  public currency: Currency;
}

export class UpdateBookReviewDto {
  @IsString()
  user: string;
  @IsNumber()
  likes: number;
  @IsString()
  content: string;
  @IsString()
  imageURL: string;
  @IsEnum(Rating)
  rating: Rating;
}
