export const idlFactory = ({ IDL }) => {
  const ID = IDL.Text;
  const Data = IDL.Text;
  return IDL.Service({
    'getAllIDs' : IDL.Func([], [IDL.Vec(ID)], []),
    'getBlock' : IDL.Func([ID], [Data], []),
    'storeBlock' : IDL.Func([ID, Data], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
