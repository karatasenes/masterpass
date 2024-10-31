import { CheckMasterPassFunction, DeleteCardFunction, DirectPurchaseFunction, GetLastTokenFunction, LinkCardToClientFunction, ListCardsFunction, PurchaseFunction, PurchaseAndRegisterFunction, RegisterFunction, ResendOtpFunction, SetAddressFunction, SetClientIdFunction, ValidateTransactionFunction } from './Types';
export default class MasterPass {
    static Utils: {
        mfsResponseHandler: import("./Types").MFSResponseHandlerFunction;
        parseAccountStatus: import("./Types").ParseAccountStatusFunction;
    };
    static Constants: {
        DefaultMethodData: import("./Types").DefaultMethodDataConstants;
        ResponseCodes: {
            SUCCESS_EMPTY: string;
            SUCCESS: string;
            VALIDATE_OTP: string;
            VALIDATE_MPIN: string;
            VALIDATE_DEVICE: string;
            VALIDATE_3D_SECURE: string;
            PIN_DETERMINATION: string;
        };
    };
    static setAddress: SetAddressFunction;
    static setClientId: SetClientIdFunction;
    static getLastToken: GetLastTokenFunction;
    static checkMasterPass: CheckMasterPassFunction;
    static listCards: ListCardsFunction;
    static register: RegisterFunction;
    static validateTransaction: ValidateTransactionFunction;
    static deleteCard: DeleteCardFunction;
    static resendOtp: ResendOtpFunction;
    static linkCardToClient: LinkCardToClientFunction;
    static purchase: PurchaseFunction;
    static purchaseAndRegister: PurchaseAndRegisterFunction;
    static directPurchase: DirectPurchaseFunction;
    static setAdditionalParameters: import("./Types").MFSSetAdditionalParameters;
    static rsaEncrypt: (data: string) => string;
}
