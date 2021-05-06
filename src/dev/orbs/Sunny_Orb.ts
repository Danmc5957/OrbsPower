/* 

   ____       _         _____                       
  / __ \     | |       |  __ \                      
 | |  | |_ __| |__  ___| |__) |____      _____ _ __ 
 | |  | | '__| '_ \/ __|  ___/ _ \ \ /\ / / _ \ '__|
 | |__| | |  | |_) \__ \ |  | (_) \ V  V /  __/ |   
  \____/|_|  |_.__/|___/_|   \___/ \_/\_/ \___|_|   
                                                    
                                   Version: 1.1                 

 */

enum SUNNY_ORB {
    stringID = "op.sunny_orb",
    itemName = "Sunny Orb",
}

const sunny_orb = new Orb(
    SUNNY_ORB.stringID,
    SUNNY_ORB.itemName,
    {
        name: "sunny_orb",
        data: 0,
    },
    {
        stack: 1,
    }
);

sunny_orb.createItem();

Recipes.addShaped(
    { id: sunny_orb.getID(), count: 1, data: 0 },
    ["xxx", "xyx", "xxx"],
    ["x", 1, 0, "y", 87, 0]
);

Callback.addCallback("ItemUse", (coords, item, block) => {
    for (let i = 0; i < 36; i++) {
        if (
            item.id == sunny_orb.getID() &&
            Player.getInventorySlot(i).id == 289 &&
            Player.getInventorySlot(i).count > 1
        ) {
            Player.setInventorySlot(
                i,
                289,
                Player.getInventorySlot(i).count - 1,
                0
            );
            World.setWeather({ rain: 0, thunder: 0 });
            Game.tipMessage(Native.Color.GREEN + "Success!");
        }
    }
});
