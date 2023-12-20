import type { NextPage } from 'next';
import Head from 'next/head';
import packageJson from '../package.json';
import CardContainer from '../components/CardContainer';

const ERC725_JS_VERSION = packageJson.dependencies['@desights/erc725.js'];
const LSP_SMART_CONTRACTS_VERSION =
  packageJson.dependencies['@lukso/lsp-smart-contracts'];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>ERC725 Tools</title>
      </Head>
      <div className="home-container container">
        <div className="content">
          <h1 className="title is-1">Welcome to ERC725 Tools</h1>
          <p>
            This website provides debugging tools to interact with{' '}
            <a
              href="https://docs.lukso.tech/standards/lsp-background/erc725"
              target="_blank"
              rel="noreferrer"
              className="home-link mr-1"
            >
              ERC725
            </a>
            smart contracts.
          </p>
          <CardContainer
            cardData={[
              {
                title: '🔎 Inspector',
                description:
                  'Check the data keys and interfaces of smart contract.',
                link: '/inspector',
                isExternal: false,
              },
              {
                title: '💽 Data Fetcher',
                description:
                  'Retrieve the contents of the smart contract data keys.',
                link: '/data-fetcher',
              },
              {
                title: '🔐 Key Manager',
                description:
                  'Encode and decode smart contract permissions of the key manager.',
                link: '/key-manager',
              },
              {
                title: '📜 ABI Encoder',
                description:
                  'Encode and decode smart contract transaction data.',
                link: '/abi-encoder',
              },
              {
                title: '📖 LSP2 Encoder ',
                description:
                  'Encode and decode storage information based on the JSON schema.',
                link: '/lsp2-encoder',
              },
            ]}
          ></CardContainer>
          <br></br>
          <br></br>
          <p>
            Forked with ❤️ from{' '}
            <a
              href="https://github.com/lukso-network/tools-erc725-inspect"
              target="_blank"
              rel="noreferrer"
              className="home-link mr-1"
            >
              Lukso ERC725 Tools Inspector
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Home;
