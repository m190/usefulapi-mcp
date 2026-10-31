# Sorry MCP server

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://sorry-app.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http sorry-app https://sorry-app.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=sorry-app&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fsorry-app.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "sorry-app": {
      "url": "https://sorry-app.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your Sorry credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/sorry-app/

<!-- connect:end (generated above, edit below) -->

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `sorryapp_list_pages` | read | List status pages |
| `sorryapp_get_page` | read | Get status page |
| `sorryapp_list_components` | read | List components |
| `sorryapp_get_component` | read | Get component |
| `sorryapp_list_notices` | read | List notices |
| `sorryapp_get_notice` | read | Get notice |
| `sorryapp_list_notice_updates` | read | List notice updates |
| `sorryapp_get_notice_update` | read | Get notice update |
| `sorryapp_list_notice_templates` | read | List notice templates |
| `sorryapp_list_update_templates` | read | List update templates |
| `sorryapp_list_subscribers` | read | List subscribers |
| `sorryapp_get_subscriber` | read | Get subscriber |
| `sorryapp_list_timezones` | read | List timezones |
| `sorryapp_create_component` | **write** | Create component |
| `sorryapp_update_component` | **write** | Update component |
| `sorryapp_create_incident` | **write** | Create incident notice |
| `sorryapp_create_maintenance` | **write** | Create maintenance notice |
| `sorryapp_update_notice` | **write** | Update notice |
| `sorryapp_create_notice_update` | **write** | Add notice update |
| `sorryapp_edit_notice_update` | **write** | Edit notice update |
| `sorryapp_create_subscriber` | **write** | Add one subscriber |
| `sorryapp_usage_status` | meta | Usage status (free-tier meter) |
| `sorryapp_request_feature` | meta | Request a missing feature |
| `sorryapp_upgrade` | meta | Upgrade to Pro (unlimited*) |
| `sorryapp_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** (per connected Sorry API token) | $0 | 50 tool calls / month |
| **Pro** (per connected Sorry API token) | **$9/mo** or **$90/yr** (2 months free) | Unlimited* |

\*Pro has a fair use limit of 10,000 tool calls a month on this server. For more, write to support@usefulapi.io.

Pro covers this server only. Subscribe with `sorryapp_upgrade` (it returns a Stripe Checkout link). Cancel any time with `sorryapp_cancel_subscription`: Pro continues to the end of the paid period, with no refund for the current period, and running `sorryapp_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT

## Token access, billing and data

Create a token in Sorry under My Account → API Tokens. This independent connector uses customer-authorized API access, with no claimed vendor endorsement or partner status. Your vendor subscription, API eligibility, quotas and notification/SMS charges remain separate. Sorry documents 10 requests per second per API token.

The token is encrypted for authorized API calls. Requested status records and subscriber contact details reach your chosen AI client and LLM provider. Credential fields, connected-token values and Slack/Teams webhook URLs are redacted. Revoke the token in Sorry to stop access; disconnect UsefulAPI to end this connection.

Usage and billing follow this token. Rotation creates a new UsefulAPI identity and does not automatically transfer Pro. Cancel the old UsefulAPI plan before rotation or contact support before changing the token.

## Public changes and notifications

Every write requires explicit confirmation. Components, notices and notice updates are public. publish=false requests suppression of the subscriber/integration broadcast; it does not make a private draft. publish=true additionally requests delivery through configured email, SMS, Slack, Teams or X channels. Vendor automations may also react to a public change, so review its content and audience.

The separate new-notice-update tool exposes no verified suppression switch and requires explicit broadcast confirmation. Adding a subscriber enables future notifications to that address or phone number. The connector does not delete resources or import/remove subscriber lists.

No vendor call is automatically replayed. After a timeout or uncertain response, check Sorry before repeating a write: duplicate calls can duplicate public records or notifications. A valid response record id is required before reporting an acknowledged change.

Notice lists support the documented page parameter, and subscriber lists support page/per_page. Template tools return the vendor-default page with documented filters; template paging and notice per_page controls are withheld pending verified request contracts. Maintenance times are sent as HH:MM:SS in the status page’s timezone.

The 21 tools were checked against current vendor documentation and local mocks. Missing/nonexistent-token checks received the vendor’s JSON401. No authenticated customer reads, real public status changes, subscriber additions or notifications were tested.
