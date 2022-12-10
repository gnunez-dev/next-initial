import Link from 'next/link';
import DarkLayout from '../components/layouts/DarkLayout';
import MainLayout from '../components/layouts/MainLayout';

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h2 className={'title'}>
        Ir a <Link href="/">Home!</Link>
      </h2>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/about.tsx</code>
      </p>
    </>
  )
}

export default AboutPage;

AboutPage.getLayout = function getLayout(page : React.ReactNode) {
  return (

    <MainLayout
      title='About'
    >
      <DarkLayout>

        { page }

      </DarkLayout>
    </MainLayout>

  );
}


