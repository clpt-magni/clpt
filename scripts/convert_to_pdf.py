import os
import subprocess
import shlex

def convert_pptx_to_pdf(input_path):
    """
    Uses macOS AppleScript to tell Microsoft PowerPoint to save a file as PDF.
    This ensures 100% fidelity using the official rendering engine.
    """
    abs_input = os.path.abspath(input_path)
    abs_output = os.path.splitext(abs_input)[0] + ".pdf"
    
    if os.path.exists(abs_output):
        print(f"Skipping: {os.path.basename(abs_input)} (PDF already exists)")
        return

    print(f"Converting: {os.path.basename(abs_input)} ...")
    
    # AppleScript for PowerPoint automation
    applescript = f'''
    tell application "Microsoft PowerPoint"
        open POSIX file "{abs_input}"
        set theActivePres to active presentation
        save theActivePres in "{abs_output}" as save as PDF
        close theActivePres
    end tell
    '''
    
    try:
        proc = subprocess.run(
            ['osascript', '-e', applescript],
            capture_output=True, text=True
        )
        if proc.returncode != 0:
            print(f"Error converting {abs_input}: {proc.stderr}")
    except Exception as e:
        print(f"Failed to run AppleScript: {e}")

def main():
    uploads_dir = os.path.join(os.getcwd(), 'public', 'uploads')
    
    if not os.path.exists(uploads_dir):
        print(f"Error: {uploads_dir} not found. Run from project root.")
        return

    print(f"Scanning for presentations in {uploads_dir}...")
    
    # --- BATCH LIMIT SETTINGS ---
    LIMIT = 0 # Set to 0 to process ALL files
    # ----------------------------

    targets = []
    for root, dirs, files in os.walk(uploads_dir):
        for file in files:
            if file.lower().endswith(('.ppt', '.pptx')) and not file.startswith('~$'):
                targets.append(os.path.join(root, file))

    if not targets:
        print("No presentations found to convert.")
        return

    # Apply limit
    if LIMIT > 0:
        print(f"Limiting to first batch of {LIMIT} files...")
        targets = targets[:LIMIT]

    print(f"Found {len(targets)} files. Starting conversion...")
    
    for ppt_path in targets:
        convert_pptx_to_pdf(ppt_path)

    print("\nMigration Complete. The 'Smart Archive' viewer is now active.")

if __name__ == "__main__":
    main()
