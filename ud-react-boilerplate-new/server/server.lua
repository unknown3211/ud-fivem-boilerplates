local CodeID = {
    author = 'UnKnownJohn',
    codeName = 'UD-React-Template',
    version = '1.0.0'
  }
  
  Citizen.CreateThread(function()
    print(CodeID.author .. ' - [' .. CodeID.codeName .. '] v' .. CodeID.version .. ' started!')
  end)