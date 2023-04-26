export default function SidebarSettingsItem(props) {
          return (
              <div className="train-selection-sidebar-railway-carriage-item">
                {props.children}
                <div className="">{props.type}</div>
                <div className=""></div>
              </div>
          )    
        }
        