import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Review } from './entities/review.entity';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}

  async findAll(): Promise<Review[]> {
    return this.reviewRepository.find({
      relations: ['user', 'book'],
    });
  }

  async findOne(id: number): Promise<Review | null> {
    return this.reviewRepository.findOne({
      where: { id },
      relations: ['user', 'book'],
    });
  }

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const newReview = this.reviewRepository.create(createReviewDto);
    return this.reviewRepository.save(newReview);
  }

  async update(
    id: number,
    updateReviewDto: UpdateReviewDto,
  ): Promise<Review | null> {
    await this.reviewRepository.update(id, updateReviewDto);
    return this.findOne(id);
  }

  async delete(id: number): Promise<void> {
    await this.reviewRepository.delete(id);
  }
}
