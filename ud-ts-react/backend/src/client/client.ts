import { exp } from "../shared/utils"
export const UD = exp['ud_base'].FetchModules();

RegisterCommand('tstest', () => {
    emit('test');
}, false);

on('test', () => {
    SendNUIMessage({
        action: 'setVisible',
        data: true
    })
});