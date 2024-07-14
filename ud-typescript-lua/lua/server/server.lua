local QBCore = exports['qb-core']:GetCoreObject()

RegisterServerEvent('ud-typescript:GiveItem', function()
    local src = source
    local Player = QBCore.Functions.GetPlayer(src)
    if Player then
    Player.Functions.AddItem('sandwich', 1)
    TriggerClientEvent('inventory:client:ItemBox', src, QBCore.Shared.Items['sandwich'], 'add')
    end
end)