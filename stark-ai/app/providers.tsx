'use client'
import {
  DynamicContextProvider,
  DynamicWidget,
  FilterChain,
  getAuthToken
} from '@dynamic-labs/sdk-react-core'
import {
    BitcoinIcon,
    EthereumIcon,
    StarknetIcon,
    FlowIcon,
    SolanaIcon,
  } from '@dynamic-labs/iconic';
import { StarknetWalletConnectors } from '@dynamic-labs/starknet'
import { SessionProvider, signIn, signOut, useSession } from 'next-auth/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { ThemeProviderProps } from 'next-themes/dist/types'

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <SessionProvider>
      <DynamicContextProvider
        settings={{
          //  environmentId: 'Enter env ID here',
        //   environmentId: process.env
        //     .NEXT_PUBLIC_DYNAMIC_ENVIRONMENT_ID as string,
          walletConnectors: [StarknetWalletConnectors],
          overrides: {
            views: [
              {
                type: 'wallet-list',
                tabs: {
                  items: [
                    {
                      label: { text: 'All chains' },
                    },
                    {
                        label: { icon: <StarknetIcon /> },
                      },
                    {
                      label: { icon: <EthereumIcon /> },
                      walletsFilter: FilterChain('EVM'),
                      recommendedWallets: [
                        {
                          walletKey: 'phantomevm',
                        },
                      ],
                    },
                  ]
                }
              }
            ]
          },
        }}
      >

        <NextThemesProvider {...props}>
          {children}
        </NextThemesProvider>
      </DynamicContextProvider>
    </SessionProvider>
  )
}
