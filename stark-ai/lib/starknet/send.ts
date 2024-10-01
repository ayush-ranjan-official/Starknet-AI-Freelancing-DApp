"use client"
import { Wallet } from '@dynamic-labs/sdk-react-core'
import StarknetWalletConnector from '@dynamic-labs/starknet/src/starknetWalletConnector'
import { Contract } from 'starknet'
import { useDynamicContext, useIsLoggedIn } from '@dynamic-labs/sdk-react-core'
import { useState, useEffect } from "react";
import { getSigner } from '@dynamic-labs/ethers-v6'

export interface SendTokenArgs {
  wallet: Wallet | null
  tokenAddress: string
  amount: bigint
  recipient: string
}

// export interface SendTokenArgs2 {
//     wallet: Wallet | null
//   tokenAddress: string
//   amount: bigint
//   recipient: string
// }
// export function YourComponent({tokenAddress,
//   recipient,
//   amount}: SendTokenArgs) {
//     const { primaryWallet } = useDynamicContext();
//   const [state, setState] = useState<string>("hey");
//   console.log(state); 

//   // useEffect(() => {
//   //   console.log(state);
//   // }, [state]);
//   // function callSendToken({
//   //   wallet,
//   //   tokenAddress,
//   //   recipient,
//   //   amount
//   // }: SendTokenArgs2) {
//   //   sendToken({wallet: wallet, tokenAddress: tokenAddress, recipient: recipient, amount: amount});
//   // }

//   console.log(primaryWallet);
//   sendToken({wallet: primaryWallet, tokenAddress: tokenAddress, recipient: recipient, amount: amount});

//   // ... rest of your component
// }

export async function sendToken({
  wallet,
  tokenAddress,
  recipient,
  amount
}: SendTokenArgs) {
//   console.log("started");
//   const [state, setState] = useState<string>("hey");
//   setState("abc");
//   console.log(state);
//   const isLoggedIn = useIsLoggedIn();
//   console.log( isLoggedIn );
//  const { primaryWallet, sdkHasLoaded } = useDynamicContext();

//   console.log({ sdkHasLoaded });
//   console.log({ primaryWallet });
//   const wallet = primaryWallet;
console.log(wallet);
console.log("send");
  if (!wallet) throw new Error('No wallet provided')
  const starknetConnector = wallet.connector as StarknetWalletConnector
console.log(starknetConnector);

  const provider = await starknetConnector.getPublicClient()
  if (!provider) throw new Error('No provider found')
    console.log(provider);


  const signer = await starknetConnector.getSigner()

  if (!signer) throw new Error('No signer found')
    console.log(signer);
  console.log(tokenAddress);

  // const contractClass = await signer.getClassAt(tokenAddress)
  // if (!contractClass) throw new Error('Token class not found')
  //   console.log(contractClass);
  //const abi = [{"inputs":[{"internalType":"uint256","name":"upgradeActivationDelay","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"}],"name":"FinalizedImplementation","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"},{"indexed":false,"internalType":"bytes","name":"initializer","type":"bytes"},{"indexed":false,"internalType":"bool","name":"finalize","type":"bool"}],"name":"ImplementationAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"},{"indexed":false,"internalType":"bytes","name":"initializer","type":"bytes"},{"indexed":false,"internalType":"bool","name":"finalize","type":"bool"}],"name":"ImplementationRemoved","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"implementation","type":"address"},{"indexed":false,"internalType":"bytes","name":"initializer","type":"bytes"}],"name":"ImplementationUpgraded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"acceptedGovernor","type":"address"}],"name":"LogNewGovernorAccepted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"nominatedGovernor","type":"address"}],"name":"LogNominatedGovernor","type":"event"},{"anonymous":false,"inputs":[],"name":"LogNominationCancelled","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"removedGovernor","type":"address"}],"name":"LogRemovedGovernor","type":"event"},{"stateMutability":"payable","type":"fallback"},{"inputs":[],"name":"MAX_UPGRADE_DELAY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROXY_GOVERNANCE_TAG","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PROXY_VERSION","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UPGRADE_DELAY_SLOT","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bool","name":"finalize","type":"bool"}],"name":"addImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getUpgradeActivationDelay","outputs":[{"internalType":"uint256","name":"delay","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"implementation","outputs":[{"internalType":"address","name":"_implementation","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes","name":"","type":"bytes"}],"name":"initialize","outputs":[],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"isNotFinalized","outputs":[{"internalType":"bool","name":"notFinal","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"proxyAcceptGovernance","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"proxyCancelNomination","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"proxyIsGovernor","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newGovernor","type":"address"}],"name":"proxyNominateNewGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"governorForRemoval","type":"address"}],"name":"proxyRemoveGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"removedImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bool","name":"finalize","type":"bool"}],"name":"removeImplementation","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newImplementation","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"},{"internalType":"bool","name":"finalize","type":"bool"}],"name":"upgradeTo","outputs":[],"stateMutability":"payable","type":"function"},{"stateMutability":"payable","type":"receive"}];
const abi = [
  {
    "type": "impl",
    "name": "Locker",
    "interface_name": "ekubo::interfaces::core::ILocker"
  },
  {
    "type": "struct",
    "name": "core::array::Span::<core::felt252>",
    "members": [
      {
        "name": "snapshot",
        "type": "@core::array::Array::<core::felt252>"
      }
    ]
  },
  {
    "type": "interface",
    "name": "ekubo::interfaces::core::ILocker",
    "items": [
      {
        "type": "function",
        "name": "locked",
        "inputs": [
          {
            "name": "id",
            "type": "core::integer::u32"
          },
          {
            "name": "data",
            "type": "core::array::Span::<core::felt252>"
          }
        ],
        "outputs": [
          {
            "type": "core::array::Span::<core::felt252>"
          }
        ],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "impl",
    "name": "ERC20MixinImpl",
    "interface_name": "openzeppelin::token::erc20::interface::ERC20ABI"
  },
  {
    "type": "struct",
    "name": "core::integer::u256",
    "members": [
      {
        "name": "low",
        "type": "core::integer::u128"
      },
      {
        "name": "high",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "enum",
    "name": "core::bool",
    "variants": [
      {
        "name": "False",
        "type": "()"
      },
      {
        "name": "True",
        "type": "()"
      }
    ]
  },
  {
    "type": "struct",
    "name": "core::byte_array::ByteArray",
    "members": [
      {
        "name": "data",
        "type": "core::array::Array::<core::bytes_31::bytes31>"
      },
      {
        "name": "pending_word",
        "type": "core::felt252"
      },
      {
        "name": "pending_word_len",
        "type": "core::integer::u32"
      }
    ]
  },
  {
    "type": "interface",
    "name": "openzeppelin::token::erc20::interface::ERC20ABI",
    "items": [
      {
        "type": "function",
        "name": "total_supply",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "balance_of",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "allowance",
        "inputs": [
          {
            "name": "owner",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "spender",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "transfer",
        "inputs": [
          {
            "name": "recipient",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "amount",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "transfer_from",
        "inputs": [
          {
            "name": "sender",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "recipient",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "amount",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "approve",
        "inputs": [
          {
            "name": "spender",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "amount",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "external"
      },
      {
        "type": "function",
        "name": "name",
        "inputs": [],
        "outputs": [
          {
            "type": "core::byte_array::ByteArray"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "symbol",
        "inputs": [],
        "outputs": [
          {
            "type": "core::byte_array::ByteArray"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "decimals",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u8"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "totalSupply",
        "inputs": [],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "balanceOf",
        "inputs": [
          {
            "name": "account",
            "type": "core::starknet::contract_address::ContractAddress"
          }
        ],
        "outputs": [
          {
            "type": "core::integer::u256"
          }
        ],
        "state_mutability": "view"
      },
      {
        "type": "function",
        "name": "transferFrom",
        "inputs": [
          {
            "name": "sender",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "recipient",
            "type": "core::starknet::contract_address::ContractAddress"
          },
          {
            "name": "amount",
            "type": "core::integer::u256"
          }
        ],
        "outputs": [
          {
            "type": "core::bool"
          }
        ],
        "state_mutability": "external"
      }
    ]
  },
  {
    "type": "constructor",
    "name": "constructor",
    "inputs": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "ekubo_core",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "type": "struct",
    "name": "ekubo::types::keys::PoolKey",
    "members": [
      {
        "name": "token0",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "token1",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "fee",
        "type": "core::integer::u128"
      },
      {
        "name": "tick_spacing",
        "type": "core::integer::u128"
      },
      {
        "name": "extension",
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ]
  },
  {
    "type": "struct",
    "name": "ekubo::types::i129::i129",
    "members": [
      {
        "name": "mag",
        "type": "core::integer::u128"
      },
      {
        "name": "sign",
        "type": "core::bool"
      }
    ]
  },
  {
    "type": "struct",
    "name": "ekubo::interfaces::core::SwapParameters",
    "members": [
      {
        "name": "amount",
        "type": "ekubo::types::i129::i129"
      },
      {
        "name": "is_token1",
        "type": "core::bool"
      },
      {
        "name": "sqrt_ratio_limit",
        "type": "core::integer::u256"
      },
      {
        "name": "skip_ahead",
        "type": "core::integer::u128"
      }
    ]
  },
  {
    "type": "struct",
    "name": "contracts::StarkBot::SwapData",
    "members": [
      {
        "name": "pool_key",
        "type": "ekubo::types::keys::PoolKey"
      },
      {
        "name": "params",
        "type": "ekubo::interfaces::core::SwapParameters"
      }
    ]
  },
  {
    "type": "struct",
    "name": "ekubo::types::delta::Delta",
    "members": [
      {
        "name": "amount0",
        "type": "ekubo::types::i129::i129"
      },
      {
        "name": "amount1",
        "type": "ekubo::types::i129::i129"
      }
    ]
  },
  {
    "type": "struct",
    "name": "contracts::StarkBot::SwapResult",
    "members": [
      {
        "name": "delta",
        "type": "ekubo::types::delta::Delta"
      }
    ]
  },
  {
    "type": "function",
    "name": "swap",
    "inputs": [
      {
        "name": "swap_data",
        "type": "contracts::StarkBot::SwapData"
      }
    ],
    "outputs": [
      {
        "type": "contracts::StarkBot::SwapResult"
      }
    ],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "mint",
    "inputs": [
      {
        "name": "to",
        "type": "core::starknet::contract_address::ContractAddress"
      },
      {
        "name": "amount",
        "type": "core::integer::u256"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "withdraw",
    "inputs": [
      {
        "name": "amount",
        "type": "core::integer::u256"
      }
    ],
    "outputs": [],
    "state_mutability": "external"
  },
  {
    "type": "function",
    "name": "owner",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "function",
    "name": "core_dispatcher",
    "inputs": [],
    "outputs": [
      {
        "type": "core::starknet::contract_address::ContractAddress"
      }
    ],
    "state_mutability": "view"
  },
  {
    "type": "event",
    "name": "openzeppelin::token::erc20::erc20::ERC20Component::Transfer",
    "kind": "struct",
    "members": [
      {
        "name": "from",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "to",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "value",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin::token::erc20::erc20::ERC20Component::Approval",
    "kind": "struct",
    "members": [
      {
        "name": "owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "spender",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "value",
        "type": "core::integer::u256",
        "kind": "data"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin::token::erc20::erc20::ERC20Component::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "Transfer",
        "type": "openzeppelin::token::erc20::erc20::ERC20Component::Transfer",
        "kind": "nested"
      },
      {
        "name": "Approval",
        "type": "openzeppelin::token::erc20::erc20::ERC20Component::Approval",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
    "kind": "struct",
    "members": [
      {
        "name": "previous_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      },
      {
        "name": "new_owner",
        "type": "core::starknet::contract_address::ContractAddress",
        "kind": "key"
      }
    ]
  },
  {
    "type": "event",
    "name": "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "OwnershipTransferred",
        "type": "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferred",
        "kind": "nested"
      },
      {
        "name": "OwnershipTransferStarted",
        "type": "openzeppelin::access::ownable::ownable::OwnableComponent::OwnershipTransferStarted",
        "kind": "nested"
      }
    ]
  },
  {
    "type": "event",
    "name": "contracts::StarkBot::Event",
    "kind": "enum",
    "variants": [
      {
        "name": "ERC20Event",
        "type": "openzeppelin::token::erc20::erc20::ERC20Component::Event",
        "kind": "flat"
      },
      {
        "name": "OwnableEvent",
        "type": "openzeppelin::access::ownable::ownable::OwnableComponent::Event",
        "kind": "flat"
      }
    ]
  }
];
  const contract = new Contract(abi, tokenAddress, signer as any)
  console.log(contract);

  
// const account0 = new Account(provider, accountAddress);
//   const erc20Address = deployERC20Response.deploy.contract_address;
// // Create a new erc20 contract object
// const erc20 = new Contract(compiledSierra.abi, erc20Address, provider);
// erc20.connect(account0);


  const { transaction_hash: txnHash } = await contract.transfer(
    recipient,
    amount
  )
  console.log(txnHash);

  return txnHash
}
