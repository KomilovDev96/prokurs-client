import type {CourseRegistrationPayload} from '@/features/contact/model/types';

export async function submitCourseApplication(
  payload: CourseRegistrationPayload
): Promise<void> {
  // Placeholder for future backend/API integration.
  await new Promise((resolve) => setTimeout(resolve, 700));

  console.info('Course registration payload:', payload);
}
