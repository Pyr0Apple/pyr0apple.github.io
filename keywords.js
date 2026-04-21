// ── KEYWORD GLOSSARY ─────────────────────────────────────────────────
// Definitions sourced from the official Legends of Runeterra keyword reference.
// Keys are matched case-insensitively in relic descriptions.
const KEYWORD_DB = {

  // ── Combat Keywords ──────────────────────────────────────────────
  "Power":         { icon:"⚡",  desc:"When the game starts, gain a Power with this effect. Powers are passive bonuses that last the whole adventure." },
  "Challenger":    { icon:"⚔️",  desc:"Can choose which enemy unit blocks it. (Drag opponent into blocking position.)" },
  "Overwhelm":     { icon:"💥",  desc:"Excess damage I deal to my blocker is dealt to the enemy Nexus." },
  "Quick Attack":  { icon:"⚡",  desc:"While attacking, strikes before its blocker." },
  "Elusive":       { icon:"🌫️",  desc:"Can only be blocked by an Elusive unit." },
  "Fearsome":      { icon:"💀",  desc:"Can only be blocked by enemies with 3 or more Power." },
  "Scout":         { icon:"🏹",  desc:"The first time only Scout units attack each round, ready your attack." },
  "Barrier":       { icon:"🔵",  desc:"Negates the next damage the unit would take. Lasts one round." },
  "Tough":         { icon:"🛡️",  desc:"Takes 1 less damage from all sources." },
  "Formidable":    { icon:"🗿",  desc:"I strike with my Health instead of my Power." },
  "Spellshield":   { icon:"✨",  desc:"Negates the next enemy spell or skill that would affect me." },
  "Regeneration":  { icon:"💚",  desc:"Heals fully at the end of each round." },
  "Fury":          { icon:"🔥",  desc:"When I kill a unit, grant me +1|+1." },
  "Deathless":     { icon:"☠️",  desc:"The next time this unit dies, remove Deathless and revive it Stunned with 1 Health." },
  "Immobile":      { icon:"⛓️",  desc:"Can't attack or block." },

  // ── Timing / Trigger Keywords ────────────────────────────────────
  "Daybreak":      { icon:"☀️",  desc:"Bonus if this is the FIRST card you play in a round." },
  "Nightfall":     { icon:"🌙",  desc:"Bonus if this is NOT the first card you play in a round." },
  "Last Breath":   { icon:"💨",  desc:"These abilities take effect when the unit dies." },
  "Round Start":   { icon:"🔔",  desc:"Get this effect when the round starts." },
  "Round End":     { icon:"🔕",  desc:"Get this effect when the round ends." },
  "Play":          { icon:"🃏",  desc:"Get this effect when you play this unit from hand." },
  "Attack":        { icon:"⚔️",  desc:"Get this effect when this unit attacks." },
  "Support":       { icon:"🤝",  desc:"Attacking with a Support unit will buff the unit to its right." },

  // ── Deck / Card Manipulation ──────────────────────────────────────
  "Fleeting":      { icon:"💨",  desc:"Fleeting cards discard from hand when the round ends." },
  "Ephemeral":     { icon:"👻",  desc:"This unit dies when it strikes or when the round ends." },
  "Toss":          { icon:"🗑️",  desc:"Obliterate X non-champion cards from the bottom of your deck." },
  "Countdown":     { icon:"⏳",  desc:"Round Start: I count down 1. At 0, activate the Countdown effect, then destroy me." },
  "Advance":       { icon:"⏩",  desc:"Makes a Countdown landmark count down that many times." },
  "Recall":        { icon:"↩️",  desc:"Return a unit to hand and remove all effects applied to it." },

  // ── Stat / Buff Keywords ─────────────────────────────────────────
  "Impact":        { icon:"🌊",  desc:"When this strikes while attacking, it deals 1 to the enemy Nexus. This keyword can stack." },
  "Fated":         { icon:"🌟",  desc:"Each round, the first time you target this unit, grant it +1|+1." },
  "Augment":       { icon:"⚙️",  desc:"When you play a created card, grant me +1|+0." },
  "Empowered":     { icon:"⚡",  desc:"A unit has its Empowered bonus while its Power is at least the listed number." },
  "Forge":         { icon:"🔨",  desc:"Grant an ally +1|+1. If the ally is equipped, grant it to their item instead." },
  "Boost":         { icon:"📈",  desc:"Increase allies' positive stackable keywords or enemies' negative stackable keywords." },
  "Spirit":        { icon:"🌸",  desc:"This unit has +1|+1. This keyword can stack." },
  "Deep":          { icon:"🌊",  desc:"I have +3|+3 once your deck has 15 or fewer cards left." },
  "Titanic":       { icon:"🐋",  desc:"Units with 8+ power or health." },
  "Evolve":        { icon:"🧬",  desc:"I have +2|+2 once you've had Units with 6+ other unique positive keywords in play this game." },

  // ── Combat Mechanics ─────────────────────────────────────────────
  "Vulnerable":    { icon:"🎯",  desc:"The enemy can challenge this unit, forcing it to block." },
  "Stun":          { icon:"💫",  desc:"Remove a unit from combat. It can't attack or block for the rest of the round." },
  "Frostbite":     { icon:"❄️",  desc:"Set a unit's Power to 0 this round. It can be changed after." },
  "Gloom":         { icon:"😔",  desc:"This unit has -1|-1. This keyword can stack." },
  "Terrify":       { icon:"😱",  desc:"Obliterate X cards from the top of the enemy deck, activating any traps on them." },
  "Slay":          { icon:"⚰️",  desc:"When you kill a unit via damage, kill effect, or striking with an ally. Self-kills (e.g. Ephemeral) don't count." },

  // ── Summoning / Special ──────────────────────────────────────────
  "Rally":         { icon:"🚩",  desc:"If you don't have one, gain the attack token. You can attack this round." },
  "Plunder":       { icon:"🏴‍☠️", desc:"A card activates its Plunder ability when played if you damaged the enemy Nexus this round." },
  "Drain":         { icon:"🩸",  desc:"Heal your Nexus for the amount of damage dealt." },
  "Sharpsight":    { icon:"👁️",  desc:"Can block Elusive units." },
  "Strongest":     { icon:"💪",  desc:"Highest Power, with ties broken by highest Health then highest Cost." },
  "Weakest":       { icon:"🪶",  desc:"Lowest Power, with ties broken by lowest Health then lowest Cost." },
  "Invoke":        { icon:"🌌",  desc:"Pick a Celestial card from among 3." },
  "Manifest":      { icon:"🎴",  desc:"Pick a card from among 3." },
  "Elemental Skill": { icon:"🌀", desc:"A unit's spell-like effect that allows enemy reactions. It's elemental!" },

  // ── Special Item Keywords ────────────────────────────────────────────
  "Mark of Medarda": { icon:"🔶", desc:"-1 Cost and draw 1." },

};
