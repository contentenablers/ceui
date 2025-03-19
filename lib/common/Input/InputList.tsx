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
        return (<div className={`prefix_suffix-input-area ${className}`} ref={ref}>
                {prefix && <span className="mr-2 ceui-input-prefix">{prefix}</span>}
                <input
                {...rest}
                />
                { suffix && <span className="ml-2 ceui-input-suffix">{suffix}</span>}
          </div>
        )
    }
  }


export { InputList };
  
