/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Header from '../../components/Header';
import { getProviders, signIn } from 'next-auth/react';

const SignIn = ({ providers }) => {
    return (
        <>
            <Header />
            <div className="mt-40">
                {Object.values(providers).map((provider) => (
                    <div
                        key={provider.name}
                        className="flex flex-col items-center"
                    >
                        <img
                            className="w-52 object-cover"
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png"
                            alt="google logo"
                        />
                        <p className="text-sm italic my-10 text-center">
                            This website is created for demo project
                        </p>
                        <button
                            className="uppercase h-12 mt-3 text-white rounded bg-red-800 hover:bg-red-900 p-3 text-sm"
                            onClick={() =>
                                signIn(provider.id, { callbackUrl: '/' })
                            }
                        >
                            Sign in with {provider.name}
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SignIn;

export async function getServerSideProps() {
    const providers = await getProviders();
    return {
        props: { providers },
    };
}
