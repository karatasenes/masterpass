export declare type MFSStatus = 200 | 500;
export declare type CallbackFunction<T> = (status: MFSStatus, response: T) => void;
export declare type MasterPassBoolean = 'Y' | 'N';
export interface MFSBaseResponse {
    referenceNo: string;
    responseCode: string;
    responseDescription: string;
    newMsisdn: string;
    internalResponseCode: string;
    internalResponseDescription: string;
    transactionId: string;
    cardUniqueId: string;
}
export declare type MFSSetAddressFunction = (serviceUrl: string) => void;
export declare type SetAddressFunction = (serviceUrl: string) => void;
export declare type MFSSetClientIdFunction = (clientId: string) => void;
export declare type SetClientIdFunction = (serviceUrl: string) => void;
export interface CheckMasterPassData {
    userId: string;
    token: string;
    referenceNo: string;
    sendSms: MasterPassBoolean;
    sendSmsLanguage: string;
}
export interface CheckMasterPassResponse extends MFSBaseResponse {
    accountStatus: string;
    amount: string;
    orderNo: string;
    token: string;
    url3D: string;
    url3DError: string;
    url3DSuccess: string;
    urlLoan: string;
    urlLoanError: string;
    urlLoanSuccess: string;
}
export declare type MFSCheckMasterPassFunction = (data: CheckMasterPassData, callback: CallbackFunction<CheckMasterPassResponse>) => void;
export declare type CheckMasterPassFunction = (data: CheckMasterPassData) => Promise<CheckMasterPassResponse>;
export interface MasterPassCard {
    Name: string;
    PromtCpin: MasterPassBoolean;
    Value1: string;
    Value2: string;
    IsMasterPassMember: MasterPassBoolean;
    CardStatus: string;
    BankIca: string;
    LoyaltyCode: string;
    ProductName: string;
    UniqueId: string;
    EftCode: string;
}
export interface ListCardsResponse extends MFSBaseResponse {
    cards: MasterPassCard[];
}
export declare type MFSListCardsFunction = (msisdn: string, token: string, callback: CallbackFunction<any>) => void;
export declare type ListCardsFunction = (msisdn: string, token: string) => Promise<ListCardsResponse>;
export interface RegisterData {
    actionType?: string;
    clientIp?: string;
    delinkReason?: string;
    eActionType?: string;
    cardTypeFlag?: string;
    cpinFlag?: MasterPassBoolean;
    defaultAccount?: MasterPassBoolean;
    mmrpConfig?: string;
    identityVerificationFlag?: MasterPassBoolean;
    mobileAccountConfig?: string;
    msisdn: string;
    referenceNo: string;
    sendSms: MasterPassBoolean;
    sendSmsLanguage: string;
    timeZone?: string;
    uiChannelType?: string;
    rtaPan: string;
    expiryDate: string;
    accountAliasName: string;
    cvc?: string;
    homeAddress?: string;
    homeCity?: string;
    homeState?: string;
    homeCountryCode?: string;
    homePostalCode?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    cardHolderName?: string;
    token: string;
}
export interface RegisterResponse extends MFSBaseResponse {
    url3D: string;
    url3DSuccess: string;
    url3DError: string;
}
export declare type MFSRegisterFunction = (data: RegisterData, callback: CallbackFunction<RegisterResponse>) => void;
export declare type RegisterFunction = (data: RegisterData) => Promise<RegisterResponse>;
export interface ValidateTransactionData {
    validationCode: string;
    token: string;
    referenceNo: string;
    sendSms: MasterPassBoolean;
    sendSmsLanguage: string;
    pinType?: string;
}
export interface ValidateTransactionResponse extends MFSBaseResponse {
    token: string;
    url3D: string | undefined;
    url3DError: string | undefined;
    url3DSuccess: string | undefined;
}
export declare type MFSValidateTransactionFunction = (data: ValidateTransactionData, callback: CallbackFunction<any>) => void;
export declare type ValidateTransactionFunction = (data: ValidateTransactionData) => Promise<ValidateTransactionResponse>;
export interface DeleteCardData {
    accountAliasName: string;
    msisdn: string;
    token: string;
    referenceNo: string;
    sendSmsLanguage: string;
    sendSms: MasterPassBoolean;
}
export interface DeleteCardResponse extends MFSBaseResponse {
}
export declare type MFSDeleteCardFunction = (data: DeleteCardData, callback: CallbackFunction<DeleteCardResponse>) => void;
export declare type DeleteCardFunction = (data: DeleteCardData) => Promise<DeleteCardResponse>;
export interface ResendOtpResponse extends MFSBaseResponse {
}
export declare type MFSResendOtpFunction = (lastToken: string, sendSmsLanguage: string, callback: CallbackFunction<ResendOtpResponse>) => void;
export declare type MFSGetLastTokenFunction = () => string;
export declare type GetLastTokenFunction = () => string;
export declare type ResendOtpFunction = (sendSmsLanguage: string) => Promise<ResendOtpResponse>;
export interface LinkCardToClientData {
    msisdn: string;
    token: string;
    referenceNo: string;
    sendSms: MasterPassBoolean;
    sendSmsLanguage: string;
    cardAliasName?: string;
}
export interface LinkCardToClientResponse extends MFSBaseResponse {
}
export declare type MFSLinkCardToClientFunction = (data: LinkCardToClientData, callback: CallbackFunction<LinkCardToClientResponse>) => void;
export declare type LinkCardToClientFunction = (data: LinkCardToClientData) => Promise<LinkCardToClientResponse>;
export interface PurchaseData {
    aav?: string;
    amount: string;
    clientIp?: string;
    encCPin?: string;
    encPassword?: string;
    listAccountName: string;
    msisdn: string;
    password?: string;
    referenceNo: string;
    sendSms?: MasterPassBoolean;
    sendSmsLanguage: string;
    sendSmsMerchant?: MasterPassBoolean;
    userId?: string;
    token: string;
    rewardName?: string;
    rewardValue?: string;
    moneyCardInvoiceAmount?: string;
    moneyCardMigrosDiscountAmount?: string;
    moneyCardPaymentAmount?: string;
    moneyCardExtraDiscountAmount?: string;
    moneyCardProductBasedDiscountAmount?: string;
    installmentCount?: number;
    cvc?: string;
    macroMerchantId?: string;
    orderNo?: string;
    paymentType?: string;
}
export interface PurchaseResponse extends MFSBaseResponse {
    accountStatus: string | undefined;
    amount: string | undefined;
    installmentCount: number | undefined;
    orderNo: string | undefined;
    token: string;
    url3D: string;
    url3DError: string;
    url3DSuccess: string;
    urlLoan: string | null;
    urlLoanError: string | null;
    urlLoanSuccess: string | null;
}
export declare type MFSPurchaseFunction = (data: PurchaseData, callback: CallbackFunction<PurchaseResponse>) => void;
export declare type PurchaseFunction = (data: PurchaseData) => Promise<PurchaseResponse>;
export interface PurchaseAndRegisterData {
    msisdn: string;
    accountAliasName: string;
    token: string;
    referenceNo: string;
    sendSms?: MasterPassBoolean;
    sendSmsLanguage: string;
    fP?: string;
    amount: string;
    actionType?: string;
    firstName?: string;
    lastName?: string;
    gender?: string;
    expiryDate: string;
    rtaPan: string;
    cardHolderName?: string;
    orderNo?: string;
    merchantId?: string;
    rewardName?: string;
    rewardValue?: string;
    moneyCardInvoiceAmount?: string;
    moneyCardMigrosDiscountAmount?: string;
    moneyCardPaymentAmount?: string;
    moneyCardExtraDiscountAmount?: string;
    moneyCardProductBasedDiscountAmount?: string;
    installmentCount?: number;
    cvc: string;
    macroMerchantId?: string;
    paymentType?: string;
}
export interface PurchaseAndRegisterResponse extends MFSBaseResponse {
    url3D: string;
    url3DSuccess: string;
    url3DError: string;
}
export declare type MFSPurchaseAndRegisterFunction = (data: PurchaseAndRegisterData, callback: CallbackFunction<PurchaseAndRegisterResponse>) => void;
export declare type PurchaseAndRegisterFunction = (data: PurchaseAndRegisterData) => Promise<PurchaseAndRegisterResponse>;
export interface DirectPurchaseData {
    token: string;
    msisdn: string;
    sendSmsLanguage: string;
    fP?: string;
    amount: string;
    expiryDate: string;
    rtaPan: string;
    cardHolderName?: string;
    cvc: string;
    macroMerchantId?: string;
    orderNo?: string;
    paymentType?: string;
    installmentCount?: number;
    rewardName?: string;
    rewardValue?: string;
}
export interface DirectPurchaseResponse extends MFSBaseResponse {
    url3D: string;
    url3DSuccess: string;
    url3DError: string;
    urlLoan: string | null;
    urlLoanSuccess: string | null;
    urlLoanError: string | null;
    token: string;
}
export declare type MFSDirectPurchaseFunction = (data: DirectPurchaseData, callback: CallbackFunction<DirectPurchaseResponse>) => void;
export declare type DirectPurchaseFunction = (data: DirectPurchaseData) => Promise<DirectPurchaseResponse>;
export declare type MFSSetAdditionalParameters = (data: object) => void;
export declare type SetAdditionalParameters = (data: object) => void;
export interface MasterPassSDKMethods {
    setAddress: MFSSetAddressFunction;
    setClientId: MFSSetClientIdFunction;
    checkMasterPass: MFSCheckMasterPassFunction;
    listCards: MFSListCardsFunction;
    register: MFSRegisterFunction;
    validateTransaction: MFSValidateTransactionFunction;
    deleteCard: MFSDeleteCardFunction;
    getLastToken: MFSGetLastTokenFunction;
    resendOtp: MFSResendOtpFunction;
    linkCardToClient: MFSLinkCardToClientFunction;
    purchase: MFSPurchaseFunction;
    purchaseAndRegister: MFSPurchaseAndRegisterFunction;
    directPurchase: MFSDirectPurchaseFunction;
    setAdditionalParameters: MFSSetAdditionalParameters;
}
export declare type AccountType = 'not-user' | 'unlinked' | 'registered' | 'unknown';
export declare type ParseAccountStatusFunction = (accountStatus: string) => AccountType;
export declare type MFSResponseHandlerFunction = (status: MFSStatus, response: MFSBaseResponse, resolve: Function, reject: Function) => Promise<void>;
export interface DefaultMethodDataConstants {
    register: Partial<RegisterData>;
    validateTransaction: Partial<ValidateTransactionData>;
    purchase: Partial<PurchaseData>;
}
