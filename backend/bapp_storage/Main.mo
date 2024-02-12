import Trie "mo:base/Trie";
import Text "mo:base/Text";
import Principal "mo:base/Principal";

actor {
  type ID = Text;
  type Owner = Text;
  type Data = Text;

  stable var blocks: Trie.Trie<ID, {owner: Owner; data: Data}> = Trie.empty();

  public func getBlock(id: ID) : async Data {
    let idKey = getIDKey(id);
    let data = Trie.find(blocks, idKey, Text.equal);
    switch (data) {
      case (null) {
        return "<EMPTY>";
      };
      case (?actualData) {
        return actualData.data;
      }
    }
  };

  public shared (message) func storeBlock(id : ID, data : Data) : async Text {
    // change to caller
    let idKey = getIDKey(id);
    let owner = Principal.toText(message.caller);
    blocks := Trie.put(blocks, idKey, Text.equal, { owner = owner; data = data }).0;
    return "Block added successfully!";
  };

  func getIDKey(id: ID) : Trie.Key<ID> {
    { key = id; hash = Text.hash(id) };
  };
};
