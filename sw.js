if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const t=s||("document"in self?document.currentScript.src:"")||location.href;if(e[t])return;let a={};const r=s=>l(s,t),u={module:{uri:t},exports:a,require:r};e[t]=Promise.all(n.map((s=>u[s]||r(s)))).then((s=>(i(...s),a)))}}define(["./workbox-3625d7b0"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/404.md.7c3c556e.js",revision:null},{url:"assets/404.md.7c3c556e.lean.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.71cb5bec.js",revision:null},{url:"assets/animation-controllers_afk-animation-controller.md.71cb5bec.lean.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.bbc0507a.js",revision:null},{url:"assets/animation-controllers_animation-controllers-intro.md.bbc0507a.lean.js",revision:null},{url:"assets/animation-controllers_death-commands.md.666dc682.js",revision:null},{url:"assets/animation-controllers_death-commands.md.666dc682.lean.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.bdc26e2c.js",revision:null},{url:"assets/animation-controllers_entity-commands.md.bdc26e2c.lean.js",revision:null},{url:"assets/animation-controllers_index.md.0010ce71.js",revision:null},{url:"assets/animation-controllers_index.md.0010ce71.lean.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.dbce7b2f.js",revision:null},{url:"assets/animation-controllers_molang-into-scoreboard.md.dbce7b2f.lean.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.b1f73ab1.js",revision:null},{url:"assets/animation-controllers_respawn-commands.md.b1f73ab1.lean.js",revision:null},{url:"assets/app.9ea78be8.js",revision:null},{url:"assets/blocks_applying-effects.md.45142421.js",revision:null},{url:"assets/blocks_applying-effects.md.45142421.lean.js",revision:null},{url:"assets/blocks_block-materials.md.951fe825.js",revision:null},{url:"assets/blocks_block-materials.md.951fe825.lean.js",revision:null},{url:"assets/blocks_block-shapes.md.a42083d0.js",revision:null},{url:"assets/blocks_block-shapes.md.a42083d0.lean.js",revision:null},{url:"assets/blocks_block-sounds.md.2bc00ac6.js",revision:null},{url:"assets/blocks_block-sounds.md.2bc00ac6.lean.js",revision:null},{url:"assets/blocks_block-tags.md.74aa34e3.js",revision:null},{url:"assets/blocks_block-tags.md.74aa34e3.lean.js",revision:null},{url:"assets/blocks_block-texture-variation.md.40ceb32b.js",revision:null},{url:"assets/blocks_block-texture-variation.md.40ceb32b.lean.js",revision:null},{url:"assets/blocks_blocks-16.md.7ecf6b17.js",revision:null},{url:"assets/blocks_blocks-16.md.7ecf6b17.lean.js",revision:null},{url:"assets/blocks_blocks-intro.md.de0cc0aa.js",revision:null},{url:"assets/blocks_blocks-intro.md.de0cc0aa.lean.js",revision:null},{url:"assets/blocks_custom-crops.md.7c4fc4a7.js",revision:null},{url:"assets/blocks_custom-crops.md.7c4fc4a7.lean.js",revision:null},{url:"assets/blocks_custom-fluids.md.452c59f4.js",revision:null},{url:"assets/blocks_custom-fluids.md.452c59f4.lean.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.598d8f43.js",revision:null},{url:"assets/blocks_custom-glass-blocks.md.598d8f43.lean.js",revision:null},{url:"assets/blocks_custom-tree.md.5dc250a8.js",revision:null},{url:"assets/blocks_custom-tree.md.5dc250a8.lean.js",revision:null},{url:"assets/blocks_fake-blocks.md.affe561d.js",revision:null},{url:"assets/blocks_fake-blocks.md.affe561d.lean.js",revision:null},{url:"assets/blocks_flipbook-textures.md.ad9d3d99.js",revision:null},{url:"assets/blocks_flipbook-textures.md.ad9d3d99.lean.js",revision:null},{url:"assets/blocks_head-like-rotation.md.60ec780e.js",revision:null},{url:"assets/blocks_head-like-rotation.md.60ec780e.lean.js",revision:null},{url:"assets/blocks_index.md.c4a9852e.js",revision:null},{url:"assets/blocks_index.md.c4a9852e.lean.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.8d4dd0af.js",revision:null},{url:"assets/blocks_legacy-block-tags.md.8d4dd0af.lean.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.bbe9f5d4.js",revision:null},{url:"assets/blocks_ore-loot-tables.md.bbe9f5d4.lean.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.e6b64947.js",revision:null},{url:"assets/blocks_rotatable-blocks.md.e6b64947.lean.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.014f382a.js",revision:null},{url:"assets/blocks_troubleshooting-blocks.md.014f382a.lean.js",revision:null},{url:"assets/chunks/3.035a77e6.js",revision:null},{url:"assets/chunks/4.bf191be1.js",revision:null},{url:"assets/chunks/AlgoliaSearch.398b563f.js",revision:null},{url:"assets/chunks/compound.3f8f82ad.js",revision:null},{url:"assets/chunks/content_log.09e62547.js",revision:null},{url:"assets/chunks/Contributors.b41f4e70.js",revision:null},{url:"assets/chunks/settings_2.b0f9bbd3.js",revision:null},{url:"assets/chunks/snippets.5bdbd1d4.js",revision:null},{url:"assets/chunks/structure.a9b5a4fc.js",revision:null},{url:"assets/commands_block-states.md.cbed7cca.js",revision:null},{url:"assets/commands_block-states.md.cbed7cca.lean.js",revision:null},{url:"assets/commands_entity-counter.md.3ffe3e20.js",revision:null},{url:"assets/commands_entity-counter.md.3ffe3e20.lean.js",revision:null},{url:"assets/commands_index.md.ec3f7c7c.js",revision:null},{url:"assets/commands_index.md.ec3f7c7c.lean.js",revision:null},{url:"assets/commands_mcfunction.md.9216ea78.js",revision:null},{url:"assets/commands_mcfunction.md.9216ea78.lean.js",revision:null},{url:"assets/commands_nbt-commands.md.a3c51282.js",revision:null},{url:"assets/commands_nbt-commands.md.a3c51282.lean.js",revision:null},{url:"assets/commands_new-execute.md.e77bff00.js",revision:null},{url:"assets/commands_new-execute.md.e77bff00.lean.js",revision:null},{url:"assets/commands_on-first-join.md.763357c3.js",revision:null},{url:"assets/commands_on-first-join.md.763357c3.lean.js",revision:null},{url:"assets/commands_on-player-death.md.ef6eafb6.js",revision:null},{url:"assets/commands_on-player-death.md.ef6eafb6.lean.js",revision:null},{url:"assets/commands_on-player-join.md.38fd7dff.js",revision:null},{url:"assets/commands_on-player-join.md.38fd7dff.lean.js",revision:null},{url:"assets/commands_on-player-leave.md.cfa83917.js",revision:null},{url:"assets/commands_on-player-leave.md.cfa83917.lean.js",revision:null},{url:"assets/commands_relative-coordinates.md.820957e8.js",revision:null},{url:"assets/commands_relative-coordinates.md.820957e8.lean.js",revision:null},{url:"assets/commands_scoreboard-operations.md.a6f7af93.js",revision:null},{url:"assets/commands_scoreboard-operations.md.a6f7af93.lean.js",revision:null},{url:"assets/commands_selectors.md.3fb7b673.js",revision:null},{url:"assets/commands_selectors.md.3fb7b673.lean.js",revision:null},{url:"assets/commands_tellraw.md.1d03a497.js",revision:null},{url:"assets/commands_tellraw.md.1d03a497.lean.js",revision:null},{url:"assets/commands_tick_json-creations.md.9f3ba66e.js",revision:null},{url:"assets/commands_tick_json-creations.md.9f3ba66e.lean.js",revision:null},{url:"assets/commands_timers.md.b059bce5.js",revision:null},{url:"assets/commands_timers.md.b059bce5.lean.js",revision:null},{url:"assets/concepts_contents.md.3f334d72.js",revision:null},{url:"assets/concepts_contents.md.3f334d72.lean.js",revision:null},{url:"assets/concepts_emojis.md.c9452174.js",revision:null},{url:"assets/concepts_emojis.md.c9452174.lean.js",revision:null},{url:"assets/concepts_index.md.0afa507e.js",revision:null},{url:"assets/concepts_index.md.0afa507e.lean.js",revision:null},{url:"assets/concepts_molang.md.473fcc3b.js",revision:null},{url:"assets/concepts_molang.md.473fcc3b.lean.js",revision:null},{url:"assets/concepts_namespaces.md.69debd75.js",revision:null},{url:"assets/concepts_namespaces.md.69debd75.lean.js",revision:null},{url:"assets/concepts_overwriting-assets.md.6cece9bd.js",revision:null},{url:"assets/concepts_overwriting-assets.md.6cece9bd.lean.js",revision:null},{url:"assets/concepts_shaders.md.326b76b3.js",revision:null},{url:"assets/concepts_shaders.md.326b76b3.lean.js",revision:null},{url:"assets/concepts_sounds.md.24dcf361.js",revision:null},{url:"assets/concepts_sounds.md.24dcf361.lean.js",revision:null},{url:"assets/concepts_subpacks.md.82c8941c.js",revision:null},{url:"assets/concepts_subpacks.md.82c8941c.lean.js",revision:null},{url:"assets/concepts_text-and-translations.md.2fc161cc.js",revision:null},{url:"assets/concepts_text-and-translations.md.2fc161cc.lean.js",revision:null},{url:"assets/concepts_textures-list.md.dc18151d.js",revision:null},{url:"assets/concepts_textures-list.md.dc18151d.lean.js",revision:null},{url:"assets/contribute-how-to.md.d440e075.js",revision:null},{url:"assets/contribute-how-to.md.d440e075.lean.js",revision:null},{url:"assets/contribute-style.md.35c89dc2.js",revision:null},{url:"assets/contribute-style.md.35c89dc2.lean.js",revision:null},{url:"assets/contribute.md.be6c65de.js",revision:null},{url:"assets/contribute.md.be6c65de.lean.js",revision:null},{url:"assets/discord.md.df8090af.js",revision:null},{url:"assets/discord.md.df8090af.lean.js",revision:null},{url:"assets/documentation_advanced-molang.md.4605f3cc.js",revision:null},{url:"assets/documentation_advanced-molang.md.4605f3cc.lean.js",revision:null},{url:"assets/documentation_creative-categories.md.50e141e5.js",revision:null},{url:"assets/documentation_creative-categories.md.50e141e5.lean.js",revision:null},{url:"assets/documentation_fog-ids.md.dedbe97a.js",revision:null},{url:"assets/documentation_fog-ids.md.dedbe97a.lean.js",revision:null},{url:"assets/documentation_index.md.d87273ea.js",revision:null},{url:"assets/documentation_index.md.d87273ea.lean.js",revision:null},{url:"assets/documentation_material-config-description.md.0c907a90.js",revision:null},{url:"assets/documentation_material-config-description.md.0c907a90.lean.js",revision:null},{url:"assets/documentation_materials.md.67666690.js",revision:null},{url:"assets/documentation_materials.md.67666690.lean.js",revision:null},{url:"assets/documentation_pack-structure.md.762f4b9d.js",revision:null},{url:"assets/documentation_pack-structure.md.762f4b9d.lean.js",revision:null},{url:"assets/documentation_projectiles.md.9e57d893.js",revision:null},{url:"assets/documentation_projectiles.md.9e57d893.lean.js",revision:null},{url:"assets/documentation_queries.md.f93b477f.js",revision:null},{url:"assets/documentation_queries.md.f93b477f.lean.js",revision:null},{url:"assets/documentation_shared-constructs.md.cc70e69c.js",revision:null},{url:"assets/documentation_shared-constructs.md.cc70e69c.lean.js",revision:null},{url:"assets/documentation_sound-definitions.md.a7bb2f70.js",revision:null},{url:"assets/documentation_sound-definitions.md.a7bb2f70.lean.js",revision:null},{url:"assets/entities_boat-entities.md.df3d7347.js",revision:null},{url:"assets/entities_boat-entities.md.df3d7347.lean.js",revision:null},{url:"assets/entities_detecting-other-entities.md.f211d054.js",revision:null},{url:"assets/entities_detecting-other-entities.md.f211d054.lean.js",revision:null},{url:"assets/entities_disabling-team-damage.md.1bc22164.js",revision:null},{url:"assets/entities_disabling-team-damage.md.1bc22164.lean.js",revision:null},{url:"assets/entities_dummy-components.md.956272dd.js",revision:null},{url:"assets/entities_dummy-components.md.956272dd.lean.js",revision:null},{url:"assets/entities_dummy-entities.md.c8d4a3cb.js",revision:null},{url:"assets/entities_dummy-entities.md.c8d4a3cb.lean.js",revision:null},{url:"assets/entities_entity-attack.md.64d1b4dc.js",revision:null},{url:"assets/entities_entity-attack.md.64d1b4dc.lean.js",revision:null},{url:"assets/entities_entity-events.md.423f8921.js",revision:null},{url:"assets/entities_entity-events.md.423f8921.lean.js",revision:null},{url:"assets/entities_entity-holds-item.md.3d949c4f.js",revision:null},{url:"assets/entities_entity-holds-item.md.3d949c4f.lean.js",revision:null},{url:"assets/entities_entity-intro-bp.md.c674aec0.js",revision:null},{url:"assets/entities_entity-intro-bp.md.c674aec0.lean.js",revision:null},{url:"assets/entities_entity-intro-rp.md.4cd2a9c1.js",revision:null},{url:"assets/entities_entity-intro-rp.md.4cd2a9c1.lean.js",revision:null},{url:"assets/entities_entity-movement.md.d13efba5.js",revision:null},{url:"assets/entities_entity-movement.md.d13efba5.lean.js",revision:null},{url:"assets/entities_entity-properties.md.fdbf4e0a.js",revision:null},{url:"assets/entities_entity-properties.md.fdbf4e0a.lean.js",revision:null},{url:"assets/entities_flying-entities.md.fcfc0be7.js",revision:null},{url:"assets/entities_flying-entities.md.fcfc0be7.lean.js",revision:null},{url:"assets/entities_index.md.fc53502a.js",revision:null},{url:"assets/entities_index.md.fc53502a.lean.js",revision:null},{url:"assets/entities_introduction-to-aec.md.4791313c.js",revision:null},{url:"assets/entities_introduction-to-aec.md.4791313c.lean.js",revision:null},{url:"assets/entities_invulnerable-entities.md.81d209dc.js",revision:null},{url:"assets/entities_invulnerable-entities.md.81d209dc.lean.js",revision:null},{url:"assets/entities_look-at-entity.md.0af6e029.js",revision:null},{url:"assets/entities_look-at-entity.md.0af6e029.lean.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4cda0fb6.js",revision:null},{url:"assets/entities_non-mob-runtime-identifiers.md.4cda0fb6.lean.js",revision:null},{url:"assets/entities_npc-dialogs.md.d16c3e53.js",revision:null},{url:"assets/entities_npc-dialogs.md.d16c3e53.lean.js",revision:null},{url:"assets/entities_render-controllers.md.f8613ceb.js",revision:null},{url:"assets/entities_render-controllers.md.f8613ceb.lean.js",revision:null},{url:"assets/entities_runtime-identifier.md.4985aca8.js",revision:null},{url:"assets/entities_runtime-identifier.md.4985aca8.lean.js",revision:null},{url:"assets/entities_sleeping-entities.md.94a965be.js",revision:null},{url:"assets/entities_sleeping-entities.md.94a965be.lean.js",revision:null},{url:"assets/entities_solid-entities.md.99b015d1.js",revision:null},{url:"assets/entities_solid-entities.md.99b015d1.lean.js",revision:null},{url:"assets/entities_spawn-rules.md.6ff2accc.js",revision:null},{url:"assets/entities_spawn-rules.md.6ff2accc.lean.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.178b6c1e.js",revision:null},{url:"assets/entities_spawning-tamed-entities.md.178b6c1e.lean.js",revision:null},{url:"assets/entities_timers.md.bb4502ff.js",revision:null},{url:"assets/entities_timers.md.bb4502ff.lean.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.935faf1c.js",revision:null},{url:"assets/entities_troubleshooting-entities.md.935faf1c.lean.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.d66c5202.js",revision:null},{url:"assets/entities_vanilla-usage-spawn-rules.md.d66c5202.lean.js",revision:null},{url:"assets/entities_village-mechanic.md.e58278ed.js",revision:null},{url:"assets/entities_village-mechanic.md.e58278ed.lean.js",revision:null},{url:"assets/entities_vuc-full.md.03367db0.lean.js",revision:null},{url:"assets/entities_vusr-full.md.917271df.js",revision:null},{url:"assets/entities_vusr-full.md.917271df.lean.js",revision:null},{url:"assets/graph-test.md.2bdd53aa.js",revision:null},{url:"assets/graph-test.md.2bdd53aa.lean.js",revision:null},{url:"assets/guide_addons.md.70b94e9a.js",revision:null},{url:"assets/guide_addons.md.70b94e9a.lean.js",revision:null},{url:"assets/guide_advancedmanifest.md.6f9ceda2.js",revision:null},{url:"assets/guide_advancedmanifest.md.6f9ceda2.lean.js",revision:null},{url:"assets/guide_blockbench.md.326da4c9.js",revision:null},{url:"assets/guide_blockbench.md.326da4c9.lean.js",revision:null},{url:"assets/guide_custom-entity.md.28a2ed09.js",revision:null},{url:"assets/guide_custom-entity.md.28a2ed09.lean.js",revision:null},{url:"assets/guide_custom-item.md.9dd09ed9.js",revision:null},{url:"assets/guide_custom-item.md.9dd09ed9.lean.js",revision:null},{url:"assets/guide_download-packs.md.963f8a4c.js",revision:null},{url:"assets/guide_download-packs.md.963f8a4c.lean.js",revision:null},{url:"assets/guide_format-version.md.bf91aee1.js",revision:null},{url:"assets/guide_format-version.md.bf91aee1.lean.js",revision:null},{url:"assets/guide_index.md.de082ab6.js",revision:null},{url:"assets/guide_index.md.de082ab6.lean.js",revision:null},{url:"assets/guide_introduction.md.3dabc49b.js",revision:null},{url:"assets/guide_introduction.md.3dabc49b.lean.js",revision:null},{url:"assets/guide_loot-table.md.02625308.js",revision:null},{url:"assets/guide_loot-table.md.02625308.lean.js",revision:null},{url:"assets/guide_project-setup-android.md.6b9c727b.js",revision:null},{url:"assets/guide_project-setup-android.md.6b9c727b.lean.js",revision:null},{url:"assets/guide_project-setup.md.a9f9b488.js",revision:null},{url:"assets/guide_project-setup.md.a9f9b488.lean.js",revision:null},{url:"assets/guide_software-preparation.md.ce9f84b9.js",revision:null},{url:"assets/guide_software-preparation.md.ce9f84b9.lean.js",revision:null},{url:"assets/guide_troubleshooting.md.da249156.js",revision:null},{url:"assets/guide_troubleshooting.md.da249156.lean.js",revision:null},{url:"assets/guide_understanding-json.md.a20be92f.js",revision:null},{url:"assets/guide_understanding-json.md.a20be92f.lean.js",revision:null},{url:"assets/hacktoberfest.md.a203a9f4.js",revision:null},{url:"assets/hacktoberfest.md.a203a9f4.lean.js",revision:null},{url:"assets/index.md.df3539bd.js",revision:null},{url:"assets/index.md.df3539bd.lean.js",revision:null},{url:"assets/items_attachables.md.439fdd92.js",revision:null},{url:"assets/items_attachables.md.439fdd92.lean.js",revision:null},{url:"assets/items_custom-armor.md.dfc7efa3.js",revision:null},{url:"assets/items_custom-armor.md.dfc7efa3.lean.js",revision:null},{url:"assets/items_custom-weapon.md.d39f8c36.js",revision:null},{url:"assets/items_custom-weapon.md.d39f8c36.lean.js",revision:null},{url:"assets/items_enchantments.md.64cf9b5d.js",revision:null},{url:"assets/items_enchantments.md.64cf9b5d.lean.js",revision:null},{url:"assets/items_equipped-item-commands.md.28095d68.js",revision:null},{url:"assets/items_equipped-item-commands.md.28095d68.lean.js",revision:null},{url:"assets/items_index.md.84c74255.js",revision:null},{url:"assets/items_index.md.84c74255.lean.js",revision:null},{url:"assets/items_item-identifiers.md.69198c96.js",revision:null},{url:"assets/items_item-identifiers.md.69198c96.lean.js",revision:null},{url:"assets/items_items-16.md.06b4da24.js",revision:null},{url:"assets/items_items-16.md.06b4da24.lean.js",revision:null},{url:"assets/items_items-intro.md.2f7229b2.js",revision:null},{url:"assets/items_items-intro.md.2f7229b2.lean.js",revision:null},{url:"assets/items_spawning-items.md.8f73c3c7.js",revision:null},{url:"assets/items_spawning-items.md.8f73c3c7.lean.js",revision:null},{url:"assets/items_spear.md.b5699c25.js",revision:null},{url:"assets/items_spear.md.b5699c25.lean.js",revision:null},{url:"assets/items_throwable.md.6cb61dcc.js",revision:null},{url:"assets/items_throwable.md.6cb61dcc.lean.js",revision:null},{url:"assets/items_tool-durability.md.2ba4dda8.js",revision:null},{url:"assets/items_tool-durability.md.2ba4dda8.lean.js",revision:null},{url:"assets/items_troubleshooting-items.md.0953a1b8.js",revision:null},{url:"assets/items_troubleshooting-items.md.0953a1b8.lean.js",revision:null},{url:"assets/items_vanilla-usage-items.md.18339121.js",revision:null},{url:"assets/items_vanilla-usage-items.md.18339121.lean.js",revision:null},{url:"assets/items_vui-full.md.480e5806.js",revision:null},{url:"assets/items_vui-full.md.480e5806.lean.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.93ce3854.js",revision:null},{url:"assets/json-ui_add-hud-elements.md.93ce3854.lean.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.dd9e5726.js",revision:null},{url:"assets/json-ui_aseprite-animations.md.dd9e5726.lean.js",revision:null},{url:"assets/json-ui_best-practices.md.cbc50f51.js",revision:null},{url:"assets/json-ui_best-practices.md.cbc50f51.lean.js",revision:null},{url:"assets/json-ui_index.md.214a20ca.js",revision:null},{url:"assets/json-ui_index.md.214a20ca.lean.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.056ffc67.js",revision:null},{url:"assets/json-ui_json-ui-documentation.md.056ffc67.lean.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.bfe76a35.js",revision:null},{url:"assets/json-ui_json-ui-intro.md.bfe76a35.lean.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.d343a7f8.js",revision:null},{url:"assets/json-ui_preserve-title-texts.md.d343a7f8.lean.js",revision:null},{url:"assets/json-ui_string-to-number.md.af9308e1.js",revision:null},{url:"assets/json-ui_string-to-number.md.af9308e1.lean.js",revision:null},{url:"assets/loot_index.md.2e728a1f.js",revision:null},{url:"assets/loot_index.md.2e728a1f.lean.js",revision:null},{url:"assets/loot_item-functions.md.5071d19e.js",revision:null},{url:"assets/loot_item-functions.md.5071d19e.lean.js",revision:null},{url:"assets/loot_loot-tables.md.1c1cd231.js",revision:null},{url:"assets/loot_loot-tables.md.1c1cd231.lean.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.a8f43fb8.js",revision:null},{url:"assets/loot_randomized-structure-loot.md.a8f43fb8.lean.js",revision:null},{url:"assets/loot_recipes.md.3a327dd3.js",revision:null},{url:"assets/loot_recipes.md.3a327dd3.lean.js",revision:null},{url:"assets/loot_trade-tables.md.72985e24.js",revision:null},{url:"assets/loot_trade-tables.md.72985e24.lean.js",revision:null},{url:"assets/loot_trading-behavior.md.46b62661.js",revision:null},{url:"assets/loot_trading-behavior.md.46b62661.lean.js",revision:null},{url:"assets/meta_addon-performance.md.89498733.js",revision:null},{url:"assets/meta_addon-performance.md.89498733.lean.js",revision:null},{url:"assets/meta_index.md.c2c72e01.js",revision:null},{url:"assets/meta_index.md.c2c72e01.lean.js",revision:null},{url:"assets/meta_jq.md.cb7ef330.js",revision:null},{url:"assets/meta_jq.md.cb7ef330.lean.js",revision:null},{url:"assets/meta_style-guide.md.a96647fe.js",revision:null},{url:"assets/meta_style-guide.md.a96647fe.lean.js",revision:null},{url:"assets/meta_useful-links.md.d0e83267.js",revision:null},{url:"assets/meta_useful-links.md.d0e83267.lean.js",revision:null},{url:"assets/meta_using-schemas.md.f424b0af.js",revision:null},{url:"assets/meta_using-schemas.md.f424b0af.lean.js",revision:null},{url:"assets/meta_version-control.md.5de27ef8.js",revision:null},{url:"assets/meta_version-control.md.5de27ef8.lean.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.2d1475a0.js",revision:null},{url:"assets/nbt_experimental-education-edition.md.2d1475a0.lean.js",revision:null},{url:"assets/nbt_index.md.749baad1.js",revision:null},{url:"assets/nbt_index.md.749baad1.lean.js",revision:null},{url:"assets/nbt_mcstructure.md.80597800.js",revision:null},{url:"assets/nbt_mcstructure.md.80597800.lean.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.fbe63687.js",revision:null},{url:"assets/nbt_nbt-in-depth.md.fbe63687.lean.js",revision:null},{url:"assets/nbt_step-by-step-example.md.77ab114c.js",revision:null},{url:"assets/nbt_step-by-step-example.md.77ab114c.lean.js",revision:null},{url:"assets/nbt_structure-limits.md.85edb92c.js",revision:null},{url:"assets/nbt_structure-limits.md.85edb92c.lean.js",revision:null},{url:"assets/particles_disabling-particles.md.49f5ed15.js",revision:null},{url:"assets/particles_disabling-particles.md.49f5ed15.lean.js",revision:null},{url:"assets/particles_index.md.ab13a858.js",revision:null},{url:"assets/particles_index.md.ab13a858.lean.js",revision:null},{url:"assets/particles_particles-and-sounds.md.c327700b.js",revision:null},{url:"assets/particles_particles-and-sounds.md.c327700b.lean.js",revision:null},{url:"assets/particles_particles.md.a92f1dd1.js",revision:null},{url:"assets/particles_particles.md.a92f1dd1.lean.js",revision:null},{url:"assets/particles_vanilla-particles.md.f1d62709.js",revision:null},{url:"assets/particles_vanilla-particles.md.f1d62709.lean.js",revision:null},{url:"assets/privacy.md.083b0e11.js",revision:null},{url:"assets/privacy.md.083b0e11.lean.js",revision:null},{url:"assets/scripting_api-environment.md.c21b2b8a.js",revision:null},{url:"assets/scripting_api-environment.md.c21b2b8a.lean.js",revision:null},{url:"assets/scripting_custom-command.md.e73ee2d0.js",revision:null},{url:"assets/scripting_custom-command.md.e73ee2d0.lean.js",revision:null},{url:"assets/scripting_game-tests.md.4795fe77.js",revision:null},{url:"assets/scripting_game-tests.md.4795fe77.lean.js",revision:null},{url:"assets/scripting_gametest-form.md.1828a327.js",revision:null},{url:"assets/scripting_gametest-form.md.1828a327.lean.js",revision:null},{url:"assets/scripting_gametest-qna.md.f4979e03.js",revision:null},{url:"assets/scripting_gametest-qna.md.f4979e03.lean.js",revision:null},{url:"assets/scripting_index.md.646c8fed.js",revision:null},{url:"assets/scripting_index.md.646c8fed.lean.js",revision:null},{url:"assets/scripting_resources.md.24c26c8b.js",revision:null},{url:"assets/scripting_resources.md.24c26c8b.lean.js",revision:null},{url:"assets/scripting_saving-loading.md.2467f969.js",revision:null},{url:"assets/scripting_saving-loading.md.2467f969.lean.js",revision:null},{url:"assets/scripting_script-net.md.20903eb5.js",revision:null},{url:"assets/scripting_script-net.md.20903eb5.lean.js",revision:null},{url:"assets/scripting_script-server.md.7cc97a77.js",revision:null},{url:"assets/scripting_script-server.md.7cc97a77.lean.js",revision:null},{url:"assets/scripting_script-watchdog.md.ab4aed77.js",revision:null},{url:"assets/scripting_script-watchdog.md.ab4aed77.lean.js",revision:null},{url:"assets/scripting_scripting-intro.md.aa5928a8.js",revision:null},{url:"assets/scripting_scripting-intro.md.aa5928a8.lean.js",revision:null},{url:"assets/scripting_starting-scripts.md.b750ff17.js",revision:null},{url:"assets/scripting_starting-scripts.md.b750ff17.lean.js",revision:null},{url:"assets/scripting_troubleshooting.md.d9b6626b.js",revision:null},{url:"assets/scripting_troubleshooting.md.d9b6626b.lean.js",revision:null},{url:"assets/scripting_typescript.md.73c06978.js",revision:null},{url:"assets/scripting_typescript.md.73c06978.lean.js",revision:null},{url:"assets/scripting_what-is-script.md.ca4e64ae.js",revision:null},{url:"assets/scripting_what-is-script.md.ca4e64ae.lean.js",revision:null},{url:"assets/servers_index.md.91ce5a76.js",revision:null},{url:"assets/servers_index.md.91ce5a76.lean.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.64e5870f.js",revision:null},{url:"assets/servers_raknet-and-mcpe.md.64e5870f.lean.js",revision:null},{url:"assets/servers_server-software.md.014a6d58.js",revision:null},{url:"assets/servers_server-software.md.014a6d58.lean.js",revision:null},{url:"assets/style.1c46c954.css",revision:null},{url:"assets/test.md.27b76696.js",revision:null},{url:"assets/test.md.27b76696.lean.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.c51bb9e3.js",revision:null},{url:"assets/visuals_animated-entity-texture.md.c51bb9e3.lean.js",revision:null},{url:"assets/visuals_animation-effects.md.895f8933.js",revision:null},{url:"assets/visuals_animation-effects.md.895f8933.lean.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.9c070902.js",revision:null},{url:"assets/visuals_bedrock-modeling.md.9c070902.lean.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.583360d2.js",revision:null},{url:"assets/visuals_custom-skin-packs.md.583360d2.lean.js",revision:null},{url:"assets/visuals_death-animations.md.6819407b.js",revision:null},{url:"assets/visuals_death-animations.md.6819407b.lean.js",revision:null},{url:"assets/visuals_glowing-texture.md.a4de54fd.js",revision:null},{url:"assets/visuals_glowing-texture.md.a4de54fd.lean.js",revision:null},{url:"assets/visuals_index.md.283c9e5a.js",revision:null},{url:"assets/visuals_index.md.283c9e5a.lean.js",revision:null},{url:"assets/visuals_introduction.md.92a35efb.js",revision:null},{url:"assets/visuals_introduction.md.92a35efb.lean.js",revision:null},{url:"assets/visuals_leash-position.md.16067d3d.js",revision:null},{url:"assets/visuals_leash-position.md.16067d3d.lean.js",revision:null},{url:"assets/visuals_materials.md.e099b42b.js",revision:null},{url:"assets/visuals_materials.md.e099b42b.lean.js",revision:null},{url:"assets/visuals_math-based-animations.md.536a2014.js",revision:null},{url:"assets/visuals_math-based-animations.md.536a2014.lean.js",revision:null},{url:"assets/visuals_player-geometry.md.bd686d3d.js",revision:null},{url:"assets/visuals_player-geometry.md.bd686d3d.lean.js",revision:null},{url:"assets/visuals_remove-shadows.md.f742e45f.js",revision:null},{url:"assets/visuals_remove-shadows.md.f742e45f.lean.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.cd93ad5c.js",revision:null},{url:"assets/visuals_retexturing-spawn-eggs.md.cd93ad5c.lean.js",revision:null},{url:"assets/visuals_structure-presentation.md.ae8dcd1b.js",revision:null},{url:"assets/visuals_structure-presentation.md.ae8dcd1b.lean.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3aade883.js",revision:null},{url:"assets/vr_editing-your-first-model.md.3aade883.lean.js",revision:null},{url:"assets/vr_index.md.5c4762cc.js",revision:null},{url:"assets/vr_index.md.5c4762cc.lean.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.248cf897.js",revision:null},{url:"assets/vr_installing-bedrock-vr.md.248cf897.lean.js",revision:null},{url:"assets/vr_pack_setup.md.ea8d62f0.js",revision:null},{url:"assets/vr_pack_setup.md.ea8d62f0.lean.js",revision:null},{url:"assets/world-generation_biome-tags.md.18a6e531.js",revision:null},{url:"assets/world-generation_biome-tags.md.18a6e531.lean.js",revision:null},{url:"assets/world-generation_biomes.md.5a8bce16.js",revision:null},{url:"assets/world-generation_biomes.md.5a8bce16.lean.js",revision:null},{url:"assets/world-generation_custom-ores.md.91179ad2.js",revision:null},{url:"assets/world-generation_custom-ores.md.91179ad2.lean.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.67d6ac41.js",revision:null},{url:"assets/world-generation_feature-block-conditions.md.67d6ac41.lean.js",revision:null},{url:"assets/world-generation_feature-types.md.44393f02.js",revision:null},{url:"assets/world-generation_feature-types.md.44393f02.lean.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.3e4d2498.js",revision:null},{url:"assets/world-generation_heightmap-noise.md.3e4d2498.lean.js",revision:null},{url:"assets/world-generation_index.md.8e38b18b.js",revision:null},{url:"assets/world-generation_index.md.8e38b18b.lean.js",revision:null},{url:"assets/world-generation_structure-features.md.55a73d9e.js",revision:null},{url:"assets/world-generation_structure-features.md.55a73d9e.lean.js",revision:null},{url:"assets/world-generation_surface-builder.md.4595eab9.js",revision:null},{url:"assets/world-generation_surface-builder.md.4595eab9.lean.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.0e9bdb9e.js",revision:null},{url:"assets/world-generation_world-generation-intro.md.0e9bdb9e.lean.js",revision:null},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"assets/images/favicons/android-chrome-192x192.png",revision:"1fb5ac37a9c926d44d9377dffdb866ec"},{url:"assets/images/favicons/android-chrome-256x256.png",revision:"7403912a35eebe25b54355dfd27106af"},{url:"manifest.webmanifest",revision:"c5a08b36b4610e940947bce83726f2a1"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
