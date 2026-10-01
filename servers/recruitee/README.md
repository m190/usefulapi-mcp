# Recruitee MCP by usefulapi

Use [Recruitee](https://recruitee.com) from Claude, Cursor, or any MCP client — search candidates, jobs, pipelines, tasks and interviews, and add candidates, notes, tags and stage moves.
Hosted, no local install: connect with your own Recruitee credentials.

**Live endpoint:** `https://recruitee.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io/recruitee

## Add to Claude

```json
{
  "mcpServers": {
    "recruitee": {
      "url": "https://recruitee.usefulapi.io/mcp"
    }
  }
}
```

On first connect you'll provide your **Recruitee company ID** and **personal API token** (Settings > Apps and plugins > Personal API tokens).
They're validated, stored per-user, and scoped to you — no keys in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `recruitee_get_current_user` | read | Get the current user |
| `recruitee_list_team_members` | read | List team members |
| `recruitee_search_candidates` | read | Search candidates |
| `recruitee_list_candidates` | read | List candidates |
| `recruitee_get_candidate` | read | Get one candidate |
| `recruitee_list_candidate_notes` | read | List a candidate's notes |
| `recruitee_list_offers` | read | List jobs |
| `recruitee_get_offer` | read | Get one job |
| `recruitee_get_pipeline_template` | read | Get a hiring pipeline |
| `recruitee_list_departments` | read | List departments |
| `recruitee_list_tags` | read | List candidate tags |
| `recruitee_list_disqualify_reasons` | read | List disqualify reasons |
| `recruitee_list_tasks` | read | List tasks |
| `recruitee_list_interview_events` | read | List interviews |
| `recruitee_list_evaluations` | read | List evaluations |
| `recruitee_create_candidate` | **write** | Create a candidate |
| `recruitee_update_candidate` | **write** | Update a candidate |
| `recruitee_add_candidate_note` | **write** | Add a note to a candidate |
| `recruitee_add_candidate_tags` | **write** | Tag a candidate |
| `recruitee_assign_candidate_to_offer` | **write** | Add a candidate to a job |
| `recruitee_move_candidate_stage` | **write** | Move a candidate to another stage |
| `recruitee_create_task` | **write** | Create a task |
| `recruitee_usage_status` | meta | Usage status (free-tier meter) |
| `recruitee_upgrade` | meta | Upgrade to Pro (unlimited) |
| `recruitee_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage or manage your subscription.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 100 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | Unlimited |

Pro covers this server only. Subscribe with `recruitee_upgrade` (it returns a Stripe Checkout link). Cancel any time with `recruitee_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `recruitee_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT © usefulapi. Not affiliated with or endorsed by Recruitee.
