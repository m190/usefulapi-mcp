# Rex Software MCP by usefulapi

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://rex-software.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http rex-software https://rex-software.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=rex-software&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Frex-software.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "rex-software": {
      "url": "https://rex-software.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Rex Software credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/rex-software/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `rex_get_user_profile` | read | Get the signed-in Rex user |
| `rex_list_accessible_accounts` | read | List the Rex accounts the user can access |
| `rex_describe_search_fields` | read | List the search fields of a Rex service |
| `rex_list_value_lists` | read | List the Rex value lists |
| `rex_get_value_list` | read | Get the values of a Rex value list |
| `rex_autocomplete_contacts` | read | Find contacts by name |
| `rex_autocomplete_listings` | read | Find listings by address |
| `rex_search_contacts` | read | Search contacts |
| `rex_search_listings` | read | Search listings |
| `rex_search_properties` | read | Search properties |
| `rex_search_leads` | read | Search leads |
| `rex_search_appraisals` | read | Search appraisals |
| `rex_search_tenancies` | read | Search tenancies |
| `rex_search_reminders` | read | Search reminders and tasks |
| `rex_search_appointments` | read | Search appointments |
| `rex_search_notes` | read | Search notes |
| `rex_search_deals` | read | Search deals |
| `rex_search_activities` | read | Search activities |
| `rex_search_listing_events` | read | Search listing events |
| `rex_search_users` | read | Search users |
| `rex_search_campaigns` | read | Search campaigns |
| `rex_get_contact` | read | Get a contact |
| `rex_get_listing` | read | Get a listing |
| `rex_get_property` | read | Get a property |
| `rex_get_lead` | read | Get a lead |
| `rex_get_appraisal` | read | Get an appraisal |
| `rex_get_tenancy` | read | Get a tenancy |
| `rex_get_note` | read | Get a note |
| `rex_get_deal` | read | Get a deal |
| `rex_get_reminder` | read | Get a reminder |
| `rex_create_contact` | **write** | Create a person contact |
| `rex_create_note` | **write** | Create a note |
| `rex_create_reminder` | **write** | Create a reminder |
| `rex_usage_status` | meta | Usage status (free-tier meter) |
| `rex_request_feature` | meta | Request a missing feature |
| `rex_upgrade` | meta | Upgrade to Pro or Pro+ |
| `rex_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per Rex user and region) | $0 | 50 tool calls / month |
| **Pro** (per Rex user and region) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per Rex user and region) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `rex_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `rex_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `rex_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT

## Account access and data

Use a dedicated agency-invited integration user with only the privileges needed. It may consume a paid agency seat. Rex Verified Integrator status covers seat-fee benefits and sandbox eligibility; this connection uses the documented ordinary live-account integration flow. Choose Australia/New Zealand or the UK and, if needed, an account id. Vendor charges are separate.

Credentials are encrypted. Requested contacts, property and tenancy details, notes and tasks reach the connected AI client and its LLM provider. Connect only records you are authorized to process there. Disconnect UsefulAPI to stop its connection. Password changes stop new sign-ins; issued tokens may remain valid until vendor expiry/revocation. We request one-hour tokens, but API activity can extend them. Billing follows Rex user id and region across that user's accounts.

Only three writes are exposed: create a person contact, an internal note or a reminder. They require a positive created id to report success. No operation is automatically replayed; check Rex before repeating an uncertain create. Notes/reminders may be visible to agency colleagues and interact with configured workflows. No message-send API is exposed. Reminder completion remains unavailable pending a verified success response.

All 33 tools were checked against current vendor documentation and local mocks. No real customer reads or business writes were tested.
