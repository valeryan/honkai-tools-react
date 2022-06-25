import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import { Emblem } from "../types/Emblem";

async function setEmblem(emblem: Emblem) {
  const docRef = doc(db, "emblems", emblem.slug);
  await setDoc(docRef, {
    slug: emblem.slug,
    name: emblem.name,
    description: emblem.description,
  });
}

export function setEmblems() {
  return emblems.map(setEmblem);
}

export const emblems: Emblem[] = [
  {
    name: "The Moth Insignia",
    description:
      "Reduces Total DMG taken by 25% and restores 15% HP after the battle.",
    slug: "the-moth-insignia",
  },
  {
    name: "Home Lost",
    description:
      "Grants 3 portal resets but locks Remembrance Sigil and Support Valkyrie.",
    slug: "home-lost",
  },
  {
    name: "False Hope",
    description: "Valkyrie receives 50% less Total DMG when debuffed.",
    slug: "false-hope",
  },
  {
    name: "Tin Flask",
    description: "Flame-Chaser support Skills are triggered more often.",
    slug: "tin-flask",
  },
  {
    name: "Ruined Legacy",
    description:
      "Grants 30 bonus initial SP but consumes 10% current HP after battle.",
    slug: "ruined-legacy",
  },
  {
    name: "Burden",
    description: "Portals carrying Signets of Deliverance appear more often.",
    slug: "burden",
  },
  {
    name: "Gold Goblet",
    description: "Portals carrying Signets of Gold appear more often.",
    slug: "gold-goblet",
  },
  {
    name: "Mad King's Mask",
    description: "Portals carrying Signets of Decimation appear more often.",
    slug: "mad-kings-mask",
  },
  {
    name: "Bodhi Leaf",
    description: "Portals carrying Signets of Bodhi appear more often.",
    slug: "bodhi-leaf",
  },
  {
    name: "Forget-Me-Not",
    description: "Portals carrying Signets of Setsuna appear more often.",
    slug: "forget-me-not",
  },
  {
    name: "Forbidden Seed",
    description: "Portals carrying Signets of Infinity appear more often.",
    slug: "forbidden-seed",
  },
  {
    name: "Memory",
    description: "Portals carrying Signets of Vicissitude appear more often.",
    slug: "memory",
  },
  {
    name: "Crystal Rose",
    description:
      "Portals carrying Signets of &#9633; &#9633; appear more often.",
    slug: "crystal-rose",
  },
  {
    name: "Abandoned",
    description:
      "Grants 1 extra level when choosing a Deliverance signet. Killing enemies reduces Ultimate CD by 20%. CD: 10s.",
    slug: "abandoned",
  },
  {
    name: "Good Old Days",
    description:
      "Grants 1 extra level when choosing a Signet of Gold. Consuming 50 SP or more in on go drops an SP Pack which grants 10 SP.",
    slug: "good-old-days",
  },
  {
    name: "Shattered Shackles",
    description:
      "Grants 1 extra level when choosing a Signet of Decimation. At below 33% HP, Valkyrie is immune to most debuffs; at below 20% HP, Valkyrie will not be interrupted when hit.",
    slug: "shattered-shackles",
  },
  {
    name: "Heavy as a Million Lives",
    description:
      "Grants 1 extra level when choosing a Signet of Bodhi. Combo count will not be reset; the first hit that lands grants an additional 50 combo count.",
    slug: "heavy-as-a-million-lives",
  },
  {
    name: "Stained Sakura",
    description:
      "Grants 1 extra level when choosing a Signet of Setsuna. When signet Setsuna Blade: Sakura Screen is active, every time Sakura Screen is triggered, its DMG conversion ration increase by 10%.",
    slug: "stained-sakura",
  },
  {
    name: "The First Scale",
    description:
      "Grants 1 extra level when choosing a Signet of Infinity. When the Signet of Infinite [X] are active, Valkyrie will enter a 8-sec Mind Sync when battle starts.",
    slug: "the-first-scale",
  },
  {
    name: "Resolve",
    description:
      "Grants 1 extra level when choosing a Vicissitude Signet. When signet of Vivid Vicissitude is Active, Soldier's Resolve starts with 1 more stack and grants temporary invincibility when blocking DMG.",
    slug: "word",
  },
  {
    name: "Thorny Crown",
    description: "???",
    slug: "thorny-crown",
  },
];
