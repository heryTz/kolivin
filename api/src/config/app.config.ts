import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  uploadPath: 'uploads',
}));
