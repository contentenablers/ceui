const InputList = {
    default : (props: { ref:any } & React.InputHTMLAttributes<HTMLInputElement>) => {
      const { ref, ...rest}=props;
      return (
            <input
            {...rest}
            ref={ref}
            />
      );
    },

    prefix_suffix:(props: { prefix?:any; suffix?: any, ref:any } & React.InputHTMLAttributes<HTMLInputElement>)=>{
        const { prefix, suffix, className, ref, ...rest}=props;
        return (<div className={`prefix_suffix-input-area ${className}`}  style={{backgroundColor:"#FAFAFA"}} ref={ref}>
                {prefix && <span className="mr-2 ceui-input-prefix">{prefix}</span>}
                <input
                style={{backgroundColor:"#FAFAFA"}}
                {...rest}
                />
                { suffix && <span className="ml-4 ceui-input-suffix">{suffix}</span>}
          </div>
        )
    }
  }


export { InputList };
  
