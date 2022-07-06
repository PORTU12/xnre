import { PartialType } from '@nestjs/mapped-types';
import { PostDto } from './create-user.dto';

export class UpdateBookDto extends PartialType(PostDto) {}
