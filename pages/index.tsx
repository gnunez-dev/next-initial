import Link from 'next/link';
import MainLayout from '../components/layouts/MainLayout';

export default function Home() {
  return (
    <MainLayout
      title='Home'
    >
        <h1>Home Page</h1>
        <h2 className={'title'}>
          Ir a <Link href="/about">About!</Link>
        </h2>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/index.tsx</code>
        </p>
    </MainLayout>
  )
}
