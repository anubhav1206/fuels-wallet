import type { Provider } from 'fuels';

export const getGasConfig = async (provider: Provider) => {
  const chain = await provider.getChain();
  const nodeInfo = await provider.getNodeInfo();

  return {
    gasLimit: chain.consensusParameters.maxGasPerTx,
    gasPrice: nodeInfo.minGasPrice,
  };
};
