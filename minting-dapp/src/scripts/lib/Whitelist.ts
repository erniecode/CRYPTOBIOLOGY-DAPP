//Brings up the list of wallets inside the smart contract
import whitelistAddresses from '../../../../smart-contract/config/whitelist.json';
//What is Merkle tree ethereum?
//A hash tree, also known as a Merkle tree, is a tree in which each leaf node is labeled with the cryptographic hash of a data block, and each non-leaf node is labeled with the
//cryptographic hash of its child nodes' labels.
import { MerkleTree } from 'merkletreejs';
//Keccak256 is a cryptographic function built into solidity. This function takes in any amount of inputs and converts it to a unique 32 byte hash.
import keccak256 from 'keccak256';

//Export the White list and Create a MerkleTree with them
export default new (class Whitelist {
  private merkleTree!: MerkleTree;

  private getMerkleTree(): MerkleTree {
    if (this.merkleTree === undefined) {
      const leafNodes = whitelistAddresses.map((addr) => keccak256(addr));

      this.merkleTree = new MerkleTree(leafNodes, keccak256, {
        sortPairs: true,
      });
    }

    return this.merkleTree;
  }

  public getProofForAddress(address: string): string[] {
    return this.getMerkleTree().getHexProof(keccak256(address));
  }

  public getRawProofForAddress(address: string): string {
    return this.getProofForAddress(address)
      .toString()
      .replaceAll("'", '')
      .replaceAll(' ', '');
  }

  public contains(address: string): boolean {
    return (
      this.getMerkleTree().getLeafIndex(Buffer.from(keccak256(address))) >= 0
    );
  }
})();
