# AssemblyAI MCP by usefulapi

Use your [AssemblyAI](https://www.assemblyai.com) account from Claude, Cursor, or any MCP client. Start transcription jobs for public audio or video URLs, and read transcripts, paragraphs, sentences, subtitles and word matches. Hosted, no local install: connect with your own credentials.

**Live endpoint:** `https://assemblyai.usefulapi.io/mcp` · **Homepage:** https://usefulapi.io

## Connect

- **Claude** (claude.ai, Desktop): open **Customize → Connectors**, click **+ Add → Add custom connector**, and paste `https://assemblyai.usefulapi.io/mcp`.
- **Claude Code:** `claude mcp add --transport http assemblyai https://assemblyai.usefulapi.io/mcp`, then run `/mcp` to log in.
- **VS Code:** [Add to VS Code](https://vscode.dev/redirect/mcp/install?name=assemblyai&config=%7B%22type%22%3A%22http%22%2C%22url%22%3A%22https%3A%2F%2Fassemblyai.usefulapi.io%2Fmcp%22%7D).
- **Cursor and other clients:** add the URL as a remote MCP server:

```json
{
  "mcpServers": {
    "assemblyai": {
      "url": "https://assemblyai.usefulapi.io/mcp"
    }
  }
}
```

Add only the URL. Do not add an `Authorization` header or an API key to the client config: the server signs you in with OAuth, and the login page asks for your AssemblyAI credentials.

Step-by-step setup, where to find your credentials, and FAQ: https://usefulapi.io/assemblyai/

<!-- connect:end (generated above, edit below) -->

On first connect you provide your **AssemblyAI API key**, copied from the AssemblyAI dashboard, and the **data region** (US or EU; choose EU if audio and transcripts must stay in the EU). The server validates them and stores them per user. No keys go in config files.

## Tools

| Tool | Type | What it does |
|------|------|--------------|
| `assemblyai_list_transcripts` | read | List transcripts |
| `assemblyai_get_transcript` | read | Get a transcript |
| `assemblyai_get_transcript_paragraphs` | read | Get transcript paragraphs |
| `assemblyai_get_transcript_sentences` | read | Get transcript sentences |
| `assemblyai_get_transcript_subtitles` | read | Get transcript subtitles |
| `assemblyai_search_transcript_words` | read | Search words in a transcript |
| `assemblyai_submit_transcript` | **write** | Start a transcription |
| `assemblyai_usage_status` | meta | Usage status (free-tier meter) |
| `assemblyai_request_feature` | meta | Request a missing feature |
| `assemblyai_upgrade` | meta | Upgrade to Pro or Pro+ |
| `assemblyai_cancel_subscription` | meta | Cancel the Pro subscription |

`read` tools are read-only; `write` tools mutate data (clients should confirm them); `meta` tools report usage, manage your subscription or send a feature request.

## Pricing

| Plan | Price | Limit |
|------|-------|-------|
| **Free** | $0 | 50 tool calls / month |
| **Pro** (per user) | **$9/mo** or **$90/yr** (2 months free) | 10,000 tool calls / month |
| **Pro+** (per user) | **$39/mo** or **$390/yr** (2 months free) | 100,000 tool calls / month |

Each paid plan covers this server only. Ask your AI to run `assemblyai_upgrade` and choose Pro or Pro+, billed monthly or yearly (it returns a Stripe Checkout link). If you already have Pro, ask to change it to Pro+. The change requires your confirmation, keeps your billing interval and charges the price difference for the rest of the period immediately. Cancel any time with `assemblyai_cancel_subscription`: your paid plan continues to the end of the paid period, with no refund for the current period, and asking to resume the same plan with `assemblyai_upgrade` before then undoes the cancel. Or write to support@usefulapi.io.

## License

MIT — see [LICENSE](../LICENSE). Documentation only; the server is hosted.
