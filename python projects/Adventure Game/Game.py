from collections import OrderedDict
from player import Player
import world

print("""
        
 ._. ______________________________________________________________________________________________________________ ._.                                                                                                                                                                  
 | | /_____/_____/_____/_____/_____/_____/_____/_____/_____/_____/____/_____/_____/_____/_____/_____/____/____/____ | |                                                                                                                                                                 
 |_|                       ,_,_,_,_,_,_,_,_,_,_|______________________________________________________              |_| 
 |-|                       |#|#|#|#|#|#|#|#|#|#|_____________________________________________________/              |-|
 | |                       '-'-'-'-'-'-'-'-'-'-|----------------------------------------------------'               | |                                      
 |-|                         __      _____________.____   _________  ________      _____  ___________               |-|
 | |                        /  \    /  \_   _____/|    |  \_   ___ \ \_____  \    /     \ \_   _____/               | |
 |_|                        \   \/\/   /|    __)_ |    |  /    \  \/  /   |   \  /  \ /  \ |    __)_                |_| 
 ._.                         \        / |        \|    |__\     \____/    |    \/    Y    \|        \               ._.
 | |                          \__/\  / /_______  /|_______ \______  /\_______  /\____|__  /_______  /               | |
 |_|                               \/          \/         \/      \/         \/         \/        \/                |_|  
 |-|                                                                                                                |-|
 | |                                                   ___________________                                          | | 
 |_|                                                   \__    ___/\_____  \                                         |_|
 ._.                                                     |    |    /   |   \                                        ._.
 | |                                                     |    |   /    |    \                                       | |
 |_|                                                     |____|   \_______  /                                       |_| 
 |-|                                                                      \/                                        |-|
 | |                         ______________ ______________     ________    _____      _____  ___________            | |
 |_|                         \__    ___/   |   \_   _____/    /  _____/   /  _  \    /     \ \_   _____/            |_|
 ._.                           |    | /    ~    \    __)_    /   \  ___  /  /_\  \  /  \ /  \ |    __)__            ._.
 | |                           |    | \    Y    /        \   \    \_\  \/    |    \/    Y    \|         |           | |
 |_|                           |____|  \___|_  /_______  /    \______  /\____|__  /\____|__  /_______  /            |_|
 |-|                                         \/        \/            \/         \/         \/        \/             |-|                                        
 | |  _____________________________________________________________________________________________________________ | |
 |_| /_____/_____/_____/_____/_____/_____/_____/_____/_____/_____/____/_____/_____/_____/_____/_____/____/____/____ |_|

    """)
def play():
    print("Escape from Cave Terror!")
    world.parse_world_dsl()
    player = Player()
    while True:
        room = world.tile_at(player.x, player.y)
        print(room.intro_text())
        room.modify_player(player)
        choose_action(room, player)


def choose_action(room, player):
    action = None
    while not action:
        available_actions = get_available_actions(room, player)
        action_input = input("Action: ")
        action = available_actions.get(action_input)
        if action:
            action()
        else:
            print("Invalid action!")


def get_available_actions(room, player):
    actions = OrderedDict()
    print("Choose an action: ")
    if player.inventory:
        action_adder(actions, 'i', player.print_inventory, "Print inventory")
    if isinstance(room, world.TraderTile):
        action_adder(actions, 't', player.trade, "Trade")
    if isinstance(room, world.EnemyTile) and room.enemy.is_alive():
        action_adder(actions, 'a', player.attack, "Attack")
    else:
        if world.tile_at(room.x, room.y - 1):
            action_adder(actions, 'n', player.move_north, "Go north")
        if world.tile_at(room.x, room.y + 1):
            action_adder(actions, 's', player.move_south, "Go south")
        if world.tile_at(room.x + 1, room.y):
            action_adder(actions, 'e', player.move_east, "Go east")
        if world.tile_at(room.x - 1, room.y):
            action_adder(actions, 'w', player.move_west, "Go west")
    if player.hp < 100:
        action_adder(actions, 'h', player.heal, "Heal")

    return actions

def action_adder(action_dict, hotkey, action, name):
    action_dict[hotkey.lower()] = action
    action_dict[hotkey.upper()] = action
    print("{}: {}".format(hotkey, name))


play()
