# Genshin Info API Documentation

## Endpoints :

List of available endpoints:

- `GET /characters`
- `GET /characters/:id`

&nbsp;

## 1. GET /characters

Description:

- Get all characters

_Response (200 - OK)_

```json
[
    ...,
    {
        "id": 19,
        "name": "Venti",
        "rarity": 5,
        "charImage": "https://api.ambr.top/assets/UI/UI_AvatarIcon_Venti.png",
        "vision": "Anemo"
    },
    ...,
]

```

&nbsp;

## 1. GET /characters/:id

Description:

- Get specific character detail by id

_Response (200 - OK)_

```json
{
  "id": 72,
  "name": "Yaoyao",
  "rarity": 4,
  "splashImage": "https://api.ambr.top/assets/UI/UI_Gacha_AvatarImg_Yaoyao.png",
  "charImage": "https://api.ambr.top/assets/UI/UI_AvatarIcon_Yaoyao.png",
  "birthday": {
    "month": 3,
    "day": 6
  },
  "location": "Streetward Rambler's Abode",
  "vision": "Dendro",
  "constellation": "Osmanthus",
  "constellationIcon": "https://res.cloudinary.com/genshin/image/upload/sprites/Eff_UI_Talent_Yaoyao.png",
  "title": "Burgeoning Grace",
  "charDescription": "Streetward Rambler's youngest disciple. A gentle and caring \"little adult.\"",
  "normalAttack": {
    "name": "Normal Attack: Toss 'N' Turn Spear",
    "description": "Normal Attack\\nPerforms up to 4 consecutive spear strikes.\\n\\nCharged Attack\\nConsumes a certain amount of Stamina to lunge forward, dealing damage to opponents along the way.\\n\\nPlunging Attack\\nPlunges from mid-air to strike the ground below, damaging opponents along the path and dealing AoE DMG upon impact.",
    "icon": "https://api.ambr.top/assets/UI/Skill_A_03.png"
  },
  "elementalSkill": {
    "name": "Raphanus Sky Cluster",
    "description": "Calls upon \"Yuegui: Throwing Mode,\" a special device created by a certain adeptus to help Yaoyao solve her problems.\\nThis skill will be used differently in Holding Mode.\\n\\nHold\\nEnters Aiming Mode to adjust the throw direction.\\n\\nYuegui: Throwing Mode\\nThrows out White Jade Radishes that will explode upon hitting characters or opponents, dealing Dendro DMG to opponents within a certain AoE, and healing characters within that same AoE based on Yaoyao's Max HP. If a radish does not hit either an opponent or a character, the radish will remain where it is and explode on contact with a character or opponent, or will explode after its duration expires.\\nYuegui: Throwing Mode will choose its radish-throw targets.\\n·If all nearby characters have more than 70% HP remaining, then it will throw the radish at a nearby opponent.\\n·If nearby characters have 70% or less HP remaining, it will throw a radish at the character with the lowest HP percentage remaining. If no opponents exist nearby, Yuegui will also throw White Jade Radishes at characters if they all have more than 70% HP and less than 100% HP remaining. Otherwise, it will throw radishes into the area at random.\\n\\nA maximum of 2 instances of Yuegui: Throwing Mode can exist at any one time.\\n\\n\"A radish a day keeps trouble away! ... Oh, this isn't about a radish's medical properties, exactly, but it does have some health benefits, yeah!\"",
    "icon": "https://api.ambr.top/assets/UI/Skill_S_Yaoyao_01.png",
    "cooldown": 15,
    "maxCharge": 1
  },
  "elementalBurst": {
    "name": "Moonjade Descent",
    "description": "At the enjoinment of a certain adeptus, Yuegui's full potential can be unleashed in an emergency, dealing Dendro DMG to nearby opponents and entering an (in some sense) unsurpassed Adeptal Legacy state.\\n\\nAdeptal Legacy\\n·White Jade Radishes generated will be changed to heal and deal DMG according to this skill. Explosions will heal all nearby party members, and the Dendro DMG that they deal will be viewed as Elemental Burst DMG instead.\\n·Summons \"Yuegui: Jumping Mode\" at intervals until their limit has been reached. The behavior of this version of Yuegui is the same as that of \"Yuegui: Throwing Mode\" in the Elemental Skill, Raphanus Sky Cluster. A maximum of 3 Yuegui: Jumping Mode can exist at any one time.\\n·Yaoyao's Movement SPD is increased by 15%.\\n·Yaoyao's Dendro RES will be increased.\\n\\nThe Adeptal Legacy state will end once Yaoyao is off-field, and all remaining Yuegui: Jumping Mode will be cleared once this state ends.\\n\\n\"Eh? Which one of these is actually Yuegui, you ask? Aren't they all Yuegui?\"",
    "icon": "https://api.ambr.top/assets/UI/Skill_E_Yaoyao_01.png",
    "cooldown": 20,
    "maxCharge": 1
  }
}

```

&nbsp;

## Global Error

_Response (500 - Internal Server Error)_

```json
{
  "message": "Internal Server Error"
}
```
