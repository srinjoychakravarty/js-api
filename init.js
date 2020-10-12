  GNU nano 3.2                                                                             init.js                                                                              Modified  

const async = require("async");
const fs = require("fs");
var base = require('./base.js');
const { config } = require('process');
const delay = require('delay');


const abiPaths = ["./contracts/roleContract.json", "./contracts/accContract.json", "./contracts/regtrSSTContract.json", "./contracts/coreContract.json"];
const wasmPaths = ["./contracts/roleContract.wasm", "./contracts/accContract.wasm", "./contracts/regtrSSTContract.wasm", "./contracts/coreContract.wasm"];

async function init() {
    // Deploy all contracts and save into contract_id.json
    const { api, abiArr, bob } = await base.connect(abiPaths);
    let c1 = await base.deploy_contract(api, wasmPaths[0], bob, 'codehash_roleC', 'contractAddr_roleC', "0x5EBD88D6");
    await delay(17654);  
    let c2 = await base.deploy_contract(api, wasmPaths[1], bob, 'codehash_accountC', 'contractAddr_accountC', "0x5EBD88D6");
    await delay(16543);    
    let c3 = await base.deploy_contract(api, wasmPaths[2], bob, 'codehash_regtrC', 'contractAddr_regtrC', "0x5EBD88D6");
    await delay(15432);   
    let c4 = await base.deploy_contract(api, wasmPaths[3], bob, 'codehash_coreC', 'contractAddr_coreC', "0x5EBD88D6");
    return { c1, c2, c3, c4 };
}

async function call_addRoleType() {
    const { api, abiArr, bob } = await base.connect(abiPaths);
    const contractAddr = getContractAddr('contractAddr_roleC');
    const selector = abiArr[0].messages.addRoleType([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], 1);
    let results = await base.call_contract(api, contractAddr, bob, 'addRoleType()', selector);
    // console.log(results);
    return results;
}

async function call_getRoleType() {

^G Get Help     ^O Write Out    ^W Where Is     ^K Cut Text     ^J Justify      ^C Cur Pos      M-U Undo        M-A Mark Text   M-] To Bracket  M-Q Previous    ^B Back
^X Exit         ^R Read File    ^\ Replace      ^U Uncut Text   ^T To Spell     ^_ Go To Line   M-E Redo        M-6 Copy Text   ^Q Where Was    M-W Next        ^F Forward
