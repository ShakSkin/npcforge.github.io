# ================================================================
# NPCFORGE — STARTER GUARD
# Installation Guide — Free Pack
# ================================================================

Three steps. Under five minutes.
No code. No signup. No email required.

Support if you get stuck: npcforge.github.io
Pack version: 1.0 — MIT Licensed

----------------------------------------------------------------

## WHAT'S IN THIS PACK

    starter-guard/
    ├── system_prompt.txt     ← Guard's personality (~200 words)
    ├── memories.json         ← 10 pre-built memory entries
    ├── config.yml            ← Standard configuration
    └── install.md            ← This file

----------------------------------------------------------------

## BEFORE YOU START

You need:

  ✓ SentiencePro OR LlamaCraft Bridge installed on your server
  ✓ An OpenAI API key (platform.openai.com)
    OR an Anthropic API key (console.anthropic.com)
  ✓ File access to your server's /plugins/ folder
  ✓ Ability to restart your server

That is all. Let's go.

----------------------------------------------------------------

## STEP 1 — COPY THE FOLDER

### SentiencePro:

Copy the entire starter-guard/ folder into:

    /plugins/SentiencePro/personalities/starter-guard/

Result:

    /plugins/
      SentiencePro/
        personalities/
          starter-guard/
            ├── system_prompt.txt
            ├── memories.json
            ├── config.yml
            └── install.md

### LlamaCraft Bridge:

Copy the entire starter-guard/ folder into:

    /plugins/LlamaCraftBridge/characters/starter-guard/

Result:

    /plugins/
      LlamaCraftBridge/
        characters/
          starter-guard/
            ├── system_prompt.txt
            ├── memories.json
            ├── config.yml
            └── install.md

----------------------------------------------------------------

## STEP 2 — ADD YOUR API KEY

Open config.yml in any text editor.

Find this line:

    api_key: "YOUR_API_KEY_HERE"

Replace with your actual key. Keep the quotes:

    api_key: "sk-proj-yourkeyhere"

Set your provider:

    provider: "openai"      ← OpenAI keys start with sk-
    provider: "anthropic"   ← Anthropic keys start with sk-ant-

Save and close the file.

----------------------------------------------------------------

## STEP 3 — RESTART AND ASSIGN

1. Restart your server completely.
   Do NOT use /reload — it won't reliably load the pack.

2. Find or spawn the NPC you want to use as your guard.

   SentiencePro:
     Right-click the NPC → personality menu → starter-guard

   LlamaCraft Bridge:
     /llama assign <NPC_ID> starter-guard

3. Walk up and test it:

    "What's your name?"
    "Can I pass?"
    "How long have you been here?"

You should get short, direct, guard-appropriate responses.
No "How can I help you today?" — that's the whole point.

----------------------------------------------------------------

## WHAT GOOD LOOKS LIKE

These are responses you should get with this pack:

  Player: "Can I pass?"
  Guard: "State your name and purpose first."

  Player: "Have you always worked here?"
  Guard: "Twelve years on this gate. Before that I was
          farming. The gate pays better."

  Player: "What's beyond the city?"
  Guard: "That's not my concern. My concern is this gate.
          Are you entering or not?"

  Player: "Are you an AI?"
  Guard: "I'm a guard. State your business or move along."

----------------------------------------------------------------

## TROUBLESHOOTING

PROBLEM: NPC still sounds like an assistant
FIX: Confirm filter_ooc_phrases: true in config.yml
     Lower temperature to 0.55
     Confirm you did a full server restart, not /reload

PROBLEM: Responses are too long
FIX: Lower max_tokens to 100 in config.yml

PROBLEM: NPC says nothing / doesn't respond
FIX: Check your API key is correct and has credit
     Check the plugin logs for error messages
     Confirm the folder path is exactly right
     On Linux, paths are case-sensitive

PROBLEM: Plugin can't find the personality
FIX: Check the folder name matches exactly: starter-guard
     Ensure all four files are in the folder
     Full server restart required every time you change files

PROBLEM: Responses repeat the same phrases
FIX: Raise presence_penalty to 0.5 in config.yml

----------------------------------------------------------------

## CUSTOMIZING THIS PACK

This pack is MIT licensed. Change whatever you want.

RENAME THE GUARD:
  In system_prompt.txt, find the opening paragraph.
  Add a name. Example: "Your name is Bren." at the top.

CHANGE THE LOCATION:
  Replace "city" with your world's city name throughout
  system_prompt.txt and memories.json.

ADD MEMORIES:
  Open memories.json and add entries following this format:

    {
      "id": "guard_custom_001",
      "type": "backstory",
      "weight": 0.8,
      "tags": ["custom", "your", "tags"],
      "trigger_keywords": ["words", "that", "trigger", "this"],
      "text": "The memory text written in the character's voice."
    }

MAKE HIM FRIENDLIER:
  In system_prompt.txt, change the tone instructions.
  Remove "suspicious by default."
  Add "You are firm but fair and occasionally warm."

MAKE HIM DARKER:
  Add a line to system_prompt.txt:
  "You have seen things at this gate that you do not discuss.
  There is a reason you do not sleep well."

----------------------------------------------------------------

## THE DIFFERENCE — FREE VS PAID

This pack is a working demonstration of what personality
engineering does to an AI NPC. It removes the customer
service voice. It gives the model direction.

The full Aldric pack goes considerably further:

  Starter Guard (this pack):    Full Aldric pack:
  ~200 word prompt              600+ word prompt
  10 basic memories             25 hand-crafted memories
  Conservative config           Tuned per character voice
  No emotional triggers         Full emotional landscape
  No speech quirks              Detailed voice mannerisms
  No vulnerability memory       Deep character history
  No personal support           Personal support included

The difference in conversation quality is immediate.

Aldric and Dravek are available at npcforge.github.io

----------------------------------------------------------------

## SUPPORT

This is a free pack. Support is limited but we will
help if we can.

If something is broken after following these steps:
  npcforge.github.io

If you want a pack that comes with personal support
and a guarantee: any paid pack at npcforge.github.io

----------------------------------------------------------------

NPCFORGE | npcforge.github.io
Starter Guard v1.0 — MIT Licensed
Free to use, modify, distribute, and build on.
No attribution required. Just build something good.
================================================================
