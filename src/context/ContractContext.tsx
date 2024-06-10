/**
 * this class will handle contract messaging. 
 */
import React, { useEffect, useState, createContext, useContext } from 'react';
import { useWriteTokenRegistryRegisterToken } from '@/abis/TokenRegistry';
import { useAccount } from 'wagmi'
import { type WriteContractErrorType } from '@wagmi/core'
  

export type IssuerData = {
  data: string
  id: string
  keys: string[]
}

type ContractActionType = {
  readIssuers: () => IssuerData[]
  writeIssuer: (issuer: IssuerData ) => Promise<boolean>
}

type ContractStateType = {
  issuerRegisted: boolean
  issuerRegistering: boolean
  issuerRegisterError: WriteContractErrorType | null
}

type ContractContextType = {
  actions: ContractActionType
  state: ContractStateType
}

const defaultState: ContractStateType = {
  issuerRegisted: false, 
  issuerRegistering: false,
  issuerRegisterError: null
}
const defaultActions = {
  readIssuers: ()=> [],
  writeIssuer: ( issuer: IssuerData ) => Promise.resolve(true)
}

const ContractContext = createContext<ContractContextType>({
 actions: defaultActions, 
 state: defaultState
});

type ContractProviderPropType = {
  children: React.ReactNode
}


const ContractContextProvider = ({children}:ContractProviderPropType)=>{

  const [issuerAddress, setIssuerAddress] = useState<String>('');
  const [state, setState] = useState<ContractStateType>(defaultState);
  const account = useAccount();
  const { data: hash , error, isPending, isSuccess, writeContractAsync } = useWriteTokenRegistryRegisterToken();
  

  
  useEffect(() => {
    if( hash ) {
      console.info(`data : ${JSON.stringify(hash)}`)

    }
  }, [hash])

  useEffect(()=> {
    if( isSuccess ) {

    }
  }, [ isSuccess ])
  useEffect(()=>{
    setState({
      ...state,
      issuerRegisterError: error,
      issuerRegistering: isPending,
      issuerRegisted: isSuccess
    })

  }, [error, isPending, isSuccess])

  useEffect(() => {
    setIssuerAddress((account.address || ''))
  }, [account]);


  const actions = {
    ...defaultActions,
    readIssuers: ()=> [],
    writeIssuer: async( issuerData: IssuerData ) => {
      try {
        if( issuerAddress !== '' ) {
          // Call the write function to register the issuer with the string data
          await writeContractAsync({
            args: [JSON.stringify(issuerData)]
          });
        } else {
          throw new Error("No account is associated")
        }
      } catch (err) {
        console.error('Failed to register issuer:', err);
      }
      return true;
    }
  }



  return <ContractContext.Provider value={ { actions, state}} >
  {children}
  </ContractContext.Provider>

}

export default ContractContextProvider;

export const useContractContext = ()=> useContext(ContractContext)
