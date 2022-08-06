import React from 'react';
import {
  AboutMe, Information, Portfolio, Skills,
} from '../../components';
import Layout from '../../layout/Layout';

function Main(): JSX.Element {
  return (
    <Layout>
      <h1 className="visually-hidden">Портфолио разработчика</h1>
      <Information />
      <AboutMe />
      <Skills />
      <Portfolio />
    </Layout>
  );
}

export default Main;
