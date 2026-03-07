import {redirect} from 'next/navigation';

export default function AdminAliasPage({
  params
}: {
  params: {slug?: string[]};
}) {
  const suffix = params.slug?.length ? `/${params.slug.join('/')}` : '';
  redirect(`/uz/admin${suffix}`);
}
