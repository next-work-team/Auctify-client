import { deleteImage } from './deleteImage';

export const deleteFromS3 = async (s3Key: string) => {
  await deleteImage(s3Key);
};
