RegisterCommand('template:test', function()
  toggleNuiFrame(true)
end)

RegisterNUICallback('hideFrame', function(_, cb)
  toggleNuiFrame(false)
  cb({})
end)